import { function_path_find } from './../../../function/path/find.mjs';
import { vs_code_open } from './../open.mjs';
export async function vs_code_function_open(function_name) {
    const file_path = await function_path_find(function_name);
    await vs_code_open(file_path);
}