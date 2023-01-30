import { ast_node_type_is } from './ast_node_type_is.mjs';
export function ast_node_identifier_is(node) {
    const node_type = 'Identifier';
    return ast_node_type_is(node, node_type);
}