import { function_path_find } from './function_path_find.mjs';
import { file_exists } from './file_exists.mjs';
export async function function_exists(function_name) {
    const function_path = await function_path_find(function_name);
    return await file_exists(function_path);
}