import { function_imports } from './function_imports.mjs';
import { js_parse_expression } from './js_parse_expression.mjs';
import { list_add_front } from './list_add_front.mjs';
import { ast_node_type_is } from './ast_node_type_is.mjs';
import { ast_node_identifier_is } from './ast_node_identifier_is.mjs';
import { ast_visit } from './ast_visit.mjs';
import { functions_all_for_each } from './functions_all_for_each.mjs';
import { function_ast_transform } from './function_ast_transform.mjs';
export async function refactor_call_to_function(function_call_property_name, function_name) {
    await functions_all_for_each(async fn => {
        if (fn === function_name) {
            return;
        }
        let changed = false;
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
                                let arguments_ = node.arguments;
                                list_add_front(arguments_, callee.object);
                                node.callee = js_parse_expression(function_name);
                                changed = true;
                            }
                        }
                    }
                }
            });
        });
        if (changed) {
            await function_imports(fn);
        }
    });
}