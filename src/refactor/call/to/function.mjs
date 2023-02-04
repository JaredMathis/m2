import { function_ast_transform_visit } from './../../../function/ast/transform/visit.mjs';
import { function_imports } from './../../../function/imports.mjs';
import { js_parse_expression } from './../../../js/parse/expression.mjs';
import { list_add_front } from './../../../list/add/front.mjs';
import { functions_all_for_each } from './../../../functions/all/for/each.mjs';
import { ast_node_call_member_identifier_is } from './../../../ast/node/call/member/identifier/is.mjs';
export async function refactor_call_to_function(function_call_property_name, function_name) {
    await functions_all_for_each(async fn => {
        if (fn === function_name) {
            return;
        }
        let changed = false;
        await function_ast_transform_visit(fn, v => {
            let {node} = v;
            ast_node_call_member_identifier_is(node, function if_true(name, node, callee) {
                if (name === function_call_property_name) {
                    let arguments_ = node.arguments;
                    let {object} = callee;
                    list_add_front(arguments_, object);
                    node.callee = js_parse_expression(function_name);
                    changed = true;
                }
            });
        });
        if (changed) {
            await function_imports(fn);
        }
    });
}