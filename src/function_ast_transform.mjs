import { function_ast_get } from "./function_ast_get.mjs";
import { function_ast_set } from "./function_ast_set.mjs";

export async function function_ast_transform(function_name, transform) {
    let ast = await function_ast_get(function_name);
    transform(ast);
    await function_ast_set(function_name, ast);
}