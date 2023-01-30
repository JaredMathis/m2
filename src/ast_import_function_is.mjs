import { ast_node_type_is } from './ast_node_type_is.mjs';
import { list_first } from './list_first.mjs';
export function ast_import_function_is(node) {
    let success = false;
    let name;
    if (ast_node_type_is(node, 'ImportDeclaration') && node.specifiers.length === 1 && node.source.value.startsWith('.')) {
        let first = list_first(node.specifiers);
        name = first.imported.name;
        if (name === first.local.name) {
            success = true;
        }
    }
    return {
        success,
        name,
        node
    };
}