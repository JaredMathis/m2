import { ast_visit } from './ast_visit.mjs';

export function ast_filter(ast) {
    let result = [];
    ast_visit(ast, v => {
        let { node } = v;
        if (result(node)) {
            result.push(node);
        }
    });
    return result;
}
