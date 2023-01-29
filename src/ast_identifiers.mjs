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


function ast_identifier_is(node) {
    const node_type = 'Identifier';
    return node.type && node.type === node_type;
}

