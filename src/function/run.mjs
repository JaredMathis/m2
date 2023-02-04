import { function_path_find } from './path/find.mjs';
import path from 'path';
export async function function_run(function_name, function_arguments) {
    let function_path = await function_path_find(function_name);
    function_path = path.resolve(function_path);
    let imported = await import("file://" + function_path);
    let _function = imported[function_name];
    let result = await _function(...function_arguments);
    return result;
}