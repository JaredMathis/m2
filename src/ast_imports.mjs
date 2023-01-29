import { log } from "./log.mjs";
import { for_each } from "./for_each.mjs";
import { ast_import_function_is } from "./ast_import_function_is.mjs";

export function ast_imports(ast) {
    let {body} = ast;
    for_each(body, b => {
        let result = ast_import_function_is(b);
        log(result);
    })
}


