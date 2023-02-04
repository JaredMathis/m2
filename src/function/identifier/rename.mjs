import { string_is } from './../../string/is.mjs';
import { ast_visit } from './../../ast/visit.mjs';
import { ast_node_identifier_is } from './../../ast/node/identifier/is.mjs';
import { function_ast_transform } from './../ast/transform.mjs';
import { arguments_assert } from './../../arguments/assert.mjs';
export async function function_identifier_rename(function_name, identifier_before, identifier_after) {
    arguments_assert(arguments, string_is, string_is, string_is);
    await function_ast_transform(function_name, async args => {
        let {ast} = args;
        ast_visit(ast, v => {
            let {node} = v;
            if (ast_node_identifier_is(node)) {
                if (node.name === identifier_before) {
                    node.name = identifier_after;
                }
            }
        });
    });
}