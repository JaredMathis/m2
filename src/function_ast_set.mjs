import { function_path_get } from './function_path_get.mjs';
import { js_unparse } from './js_unparse.mjs';
import { file_write } from './file_write.mjs';
export async function function_ast_set(function_name, ast) {
    let file_path = await function_path_get(function_name);
    let code = js_unparse(ast);
    await file_write(file_path, code);
}