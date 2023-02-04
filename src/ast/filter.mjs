import { ast_visit } from './visit.mjs';
export function ast_filter(ast, node_include_if) {
    let result = [];
    ast_visit(ast, v => {
        let {node} = v;
        if (node_include_if(node)) {
            result.push(node);
        }
    });
    return result;
}