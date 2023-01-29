import { ast_visit } from './ast_visit.mjs';
export function ast_identifiers(ast) {
    let result = [];
    ast_visit(ast, v => {
        let {node} = v;
        if (node.type && node.type === 'Identifier') {
            result.push(node);
        }
    });
    return result;
}


