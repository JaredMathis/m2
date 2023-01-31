import { ast_node_type_is } from './ast_node_type_is.mjs';
import { ast_node_identifier_is } from './ast_node_identifier_is.mjs';
import { ast_visit } from './ast_visit.mjs';
import { functions_all_for_each } from './functions_all_for_each.mjs';
import { log } from './log.mjs';
import { function_ast_transform } from './function_ast_transform.mjs';
import { js_parse } from './js_parse.mjs';
export async function refactor_call_to_function(function_call_property_name, function_name) {
    await functions_all_for_each(async fn => {
        if (fn === function_name) {
            return;
        }
        await function_ast_transform(fn, args => {
            let {ast} = args;
            ast_visit(ast, v => {
                let {node} = v;
                if (ast_node_type_is(node, 'CallExpression')) {
                    let {callee} = node;
                    if (ast_node_type_is(callee, 'MemberExpression')) {
                        let {property} = callee;
                        if (ast_node_identifier_is(property)) {
                            let {name} = property;
                            if (name === function_call_property_name) {
                                log(node);
                                callee = js_parse(`function_name`)
                            }
                        }
                    }
                }
            });
        });
    });
}