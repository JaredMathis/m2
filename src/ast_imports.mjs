import { log } from "./log.mjs";
import { for_each } from "./for_each.mjs";

export function ast_imports(ast) {
    let {body} = ast;
    for_each(body, b => {
        if (b.type === 'ImportDeclaration') {
            log(b);
        }
    })
}