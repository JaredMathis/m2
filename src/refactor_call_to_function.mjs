import { ast_visit } from './ast_visit.mjs';
import { ast_node_literal_is } from './ast_node_literal_is.mjs';
import { functions_all_for_each } from './functions_all_for_each.mjs';
export async function refactor_call_to_function(function_call_property_name, function_name) {
    await functions_all_for_each(async fn => {
        let {ast} = args;
        ast_visit(ast, v => {
            let {node} = v;
            if (ast_node_literal_is(node)) {
            }
        });
    });
}