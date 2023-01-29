import { ast_identifier_is } from './ast_identifier_is.mjs';
import { ast_visit } from './ast_visit.mjs';
export function ast_identifiers(ast) {
    let result = [];
    ast_visit(ast, v => {
        let {node} = v;
        if (ast_identifier_is(node)) {
            result.push(node);
        }
    });
    return result;
}



