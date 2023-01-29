import { ast_identifier_is } from './ast_identifier_is.mjs';
import { ast_visit } from './ast_visit.mjs';
export function ast_identifiers(ast) {
    let filter = ast_identifier_is;
    let result = [];
    ast_visit(ast, v => {
        let {node} = v;
        if (result(node)) {
            result.push(node);
        }
    });
    return result;
}



