import { function_path_get } from './function_path_get.mjs';
import { vs_code_open } from './vs_code_open.mjs';
export function vs_code_function_open(function_name) {
    const file_path = function_path_get(function_name);
    vs_code_open(file_path);
}