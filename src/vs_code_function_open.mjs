import { function_path_find } from './function_path_get.mjs';
import { vs_code_open } from './vs_code_open.mjs';
export async function vs_code_function_open(function_name) {
    const file_path = await function_path_find(function_name);
    await vs_code_open(file_path);
}