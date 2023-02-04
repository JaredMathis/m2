import { function_imports } from './../../../imports.mjs';
import { js_parse_expression } from './../../../../js/parse/expression.mjs';
import { ast_visit } from './../../../../ast/visit.mjs';
import { function_ast_transform } from './../../../ast/transform.mjs';
import { properties_replace } from './../../../../properties/replace.mjs';
import { ast_node_literal_is } from './../../../../ast/node/literal/is.mjs';
export async function function_refactor_string_to_function(fn, string_value, function_name) {
    if (fn == function_name) {
        return;
    }
    let changed = false;
    await function_ast_transform(fn, args => {
        let {ast} = args;
        ast_visit(ast, v => {
            let {node} = v;
            if (ast_node_literal_is(node)) {
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
}