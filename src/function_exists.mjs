import { function_path_find } from './function_path_get.mjs';
import { file_exists } from './file_exists.mjs';
export async function function_exists(function_name) {
    return await file_exists(await function_path_find(function_name));
}