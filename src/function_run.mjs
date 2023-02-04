import { function_path_find } from "./function_path_find.mjs";

export async function function_run(function_name, function_arguments) {
    let function_path = await function_path_find(function_name);
    let imported = await import('../' + function_path);
    let _function = imported[function_name];
    let result = await _function(...function_arguments);
    return result;
}