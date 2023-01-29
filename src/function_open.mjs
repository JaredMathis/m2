import { function_path_get } from "./function_path_get.mjs";
import { file_exists } from "./file_exists.mjs";
import { function_new } from "./function_new.mjs";
import { vs_code_function_open } from "./vs_code_function_open.mjs";

export async function function_open(function_name) {
    const file_path = function_path_get(function_name);
    if (!await file_exists(file_path)) {
        await function_new(function_name);
    }
    await vs_code_function_open(function_name);
}