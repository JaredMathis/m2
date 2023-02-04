import { ast_import_function_is } from './ast_import_function_is.mjs';
import { for_each_async } from './for_each_async.mjs';
export async function ast_imports_for_each(ast, for_each_import_function) {
    let {body} = ast;
    await for_each_async(body, async import_statement => {
        let function_is = ast_import_function_is(import_statement);
        if (function_is.success) {
            await for_each_import_function(function_is);
        }
    });
}