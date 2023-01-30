import { log } from "./log.mjs";
import { for_each } from "./for_each.mjs";
import { ast_import_function_is } from "./ast_import_function_is.mjs";

export function ast_imports(ast) {
    let result = [];
    ast_imports_for_each(ast, for_each_import_function);
    return result;

    function for_each_import_function(function_is) {
        result.push(function_is.name);
    }
}


function ast_imports_for_each(ast, for_each_import_function) {
    let { body } = ast;
    for_each(body, import_statement => {
        let function_is = ast_import_function_is(import_statement);
        if (function_is.success) {
            for_each_import_function(function_is);
        }
    });
}

