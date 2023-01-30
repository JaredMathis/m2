import { function_new } from './function_new.mjs';
import { function_exists } from './function_exists.mjs';
export async function function_new_if_not_exists(function_name) {
    if (!await function_exists(function_name)) {
        await function_new(function_name);
    }
}