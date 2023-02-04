import { ast_node_type_is } from './../type/is.mjs';
export function ast_node_literal_is(node) {
    return ast_node_type_is(node, 'Literal');
}