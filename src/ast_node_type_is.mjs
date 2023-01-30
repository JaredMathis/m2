import assert from "assert";

export function ast_node_type_is(node, node_type) {
    assert(arguments.length === 2);
    return node.type && node.type === node_type;
}
