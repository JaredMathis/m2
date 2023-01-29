import { ast_node_type_is } from "./ast_node_type_is.mjs";

export function ast_import_function_is(b) {
    let success = false;
    let name;
    if (ast_node_type_is('ImportDeclaration') && b.specifiers.length === 1 && b.source.value.startsWith('.')) {
        let first = b.specifiers[0];
        name = first.imported.name ;
        if (name === first.local.name) {
            success = true;
        }
    }
    return {success, name};
}
