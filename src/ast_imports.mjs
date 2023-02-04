import { ast_imports_for_each } from './ast_imports_for_each.mjs';
export async function ast_imports(ast) {
    let result = [];
    await ast_imports_for_each(ast, for_each_import_function);
    function for_each_import_function(function_is) {
        result.push(function_is.name);
    }
    return result;
}