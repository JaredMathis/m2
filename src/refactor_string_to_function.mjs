import { log } from './log.mjs';
import { function_imports } from './function_imports.mjs';
import { js_parse_expression } from './js_parse_expression.mjs';
import { ast_node_type_is } from './ast_node_type_is.mjs';
import { ast_visit } from './ast_visit.mjs';
import { function_ast_transform } from './function_ast_transform.mjs';
import { js_parse } from './js_parse.mjs';
import { function_new_if_not_exists } from './function_new_if_not_exists.mjs';
import { functions_all_get } from './functions_all_get.mjs';
import { for_each_async } from './for_each_async.mjs';
import { arguments_assert } from './arguments_assert.mjs';
import { string_is } from './string_is.mjs';
import { properties_replace } from './properties_replace.mjs';
export async function refactor_string_to_function(string_value, function_name) {
    arguments_assert(arguments, string_is, string_is);
    let f = await functions_all_get();
    await function_new_if_not_exists(function_name);
    await function_ast_transform(function_name, args => {
        let {ast} = args;
        const source_code = `export function ${function_name}() { return \`${string_value}\` }`;
        ast.body = js_parse(source_code).body;
    });
    await for_each_async(f, async fn => {
        if (fn == function_name) {
            return;
        }
        let changed = false;
        await function_ast_transform(fn, args => {
            let {ast} = args;
            ast_visit(ast, v => {
                let {node} = v;
                if (ast_node_type_is(node, 'Literal')) {
                    if (node.value === string_value) {
                        let e = js_parse_expression(`${ function_name }()`);
                        properties_replace(node, e);
                        changed = true;
                    }
                }
            });
        });
        if (changed) {
            await function_imports(fn);
        }
    });
}


