import { file_read } from './file_read.mjs';
import { function_path_find } from './function_path_find.mjs';
export async function function_read(function_name) {
    let file_path = await function_path_find(function_name);
    let text = await file_read(file_path);
    return text;
}