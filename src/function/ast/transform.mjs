import { function_ast_get } from './get.mjs';
import { function_ast_set } from './set.mjs';
export async function function_ast_transform(function_name, transform) {
    let ast = await function_ast_get(function_name);
    await transform({ ast });
    await function_ast_set(function_name, ast);
}