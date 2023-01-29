import { log } from "./log.mjs";
import { for_each } from "./for_each.mjs";

export function ast_imports(ast) {
    let {body} = ast;
    for_each(body, b => {
        let result = ast_import_function_is(b);
        log(result);
    })
}

function ast_import_function_is(b) {
    let result = false;
    if (b.type === 'ImportDeclaration' && b.specifiers.length === 1 && b.source.value.startsWith('.')) {
        let first = b.specifiers[0];
        if (first.imported.name === first.local.name) {
            result = true;
        }
    }
    return result;
}
