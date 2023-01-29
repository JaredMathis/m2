export function ast_import_function_is(b) {
    let result = false;
    if (b.type === 'ImportDeclaration' && b.specifiers.length === 1 && b.source.value.startsWith('.')) {
        let first = b.specifiers[0];
        if (first.imported.name === first.local.name) {
            result = true;
        }
    }
    return result;
}
