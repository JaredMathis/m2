import { function_ast_transform_visit } from './../ast/transform/visit.mjs';
import { string_is } from './../../string/is.mjs';
import { ast_node_identifier_is } from './../../ast/node/identifier/is.mjs';
import { arguments_assert } from './../../arguments/assert.mjs';
export async function function_identifier_rename(function_name, identifier_before, identifier_after) {
    arguments_assert(arguments, string_is, string_is, string_is);
    await function_ast_transform_visit(function_name, v => {
        let {node} = v;
        if (ast_node_identifier_is(node)) {
            if (node.name === identifier_before) {
                node.name = identifier_after;
            }
        }
    });
}