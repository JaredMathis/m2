import { for_each } from './../../for/each.mjs';
import { ast_node_type_is } from './../node/type/is.mjs';
export function ast_exports_get(ast) {
    let exports = [];
    for_each(ast.body, b => {
        if (ast_node_type_is(b, 'ExportNamedDeclaration')) {
            exports.push(b);
        }
    });
    return exports;
}