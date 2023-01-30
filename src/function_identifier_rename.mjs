import { ast_visit } from './ast_visit.mjs';
import { log } from './log.mjs';
import { ast_identifier_is } from './ast_identifier_is.mjs';
import { function_ast_transform } from './function_ast_transform.mjs';
export async function function_identifier_rename(function_name, identifier_before, identifier_after) {
    await function_ast_transform(function_name, async args => {
        let {ast} = args;
        ast_visit(ast, w => {
            let {node} = w;
            if (ast_identifier_is(node)) {
                if (node.name === identifier_before) {
                    node.name = identifier_after;
                }
            }
        });
    });
}