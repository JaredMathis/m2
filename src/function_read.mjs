import { file_read } from './file_read.mjs';
import { function_path_get } from './function_path_get.mjs';

export async function function_read(function_name) {
    let file_path = function_path_get(function_name);
    let text = await file_read(file_path);
    return text;
}
