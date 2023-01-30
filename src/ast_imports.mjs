import { log } from "./log.mjs";
import { for_each } from "./for_each.mjs";
import { ast_import_function_is } from "./ast_import_function_is.mjs";

export function ast_imports(ast) {
    let result = [];
    let {body} = ast;
    for_each(body, import_statement => {
        let function_is = ast_import_function_is(import_statement);
        if (function_is.success) {
            result.push(function_is.name);
        }
    })
    return result;
}


