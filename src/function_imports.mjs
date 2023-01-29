import {function_ast_get} from './function_ast_get.mjs';
export async function function_imports(function_name) {
    let ast = await function_ast_get(function_name);
}