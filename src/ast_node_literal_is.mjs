import { ast_node_type_is } from './ast_node_type_is.mjs';

export function ast_node_literal_is(node) {
    return ast_node_type_is(node, 'Literal');
}
