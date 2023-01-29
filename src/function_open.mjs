import { function_path_get } from "./function_path_get.mjs";

export async function function_open(function_name) {
    const file_path = function_path_get(function_name);
    if (!await file_exists(file_path)) {
        await function_new(function_name);
    }
    await vs_code_function_open(function_name);
}