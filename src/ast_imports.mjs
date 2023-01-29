import { log } from "./log.mjs";
import { for_each } from "./for_each.mjs";

export function ast_imports(ast) {
    let {body} = ast;
    for_each(body, b => {
        if (b.type === 'ImportDeclaration' && b.specifiers.length === 1 && b.source.value.startsWith('.')) {
            log(b.specifiers[0]);
        }
    })
}