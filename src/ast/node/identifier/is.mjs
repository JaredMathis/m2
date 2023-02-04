import { ast_node_type_is } from './../type/is.mjs';
export function ast_node_identifier_is(node) {
    const node_type = 'Identifier';
    return ast_node_type_is(node, node_type);
}