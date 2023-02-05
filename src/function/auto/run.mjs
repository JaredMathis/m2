import { function_run } from './../run.mjs';
import { function_auto } from './../auto.mjs';
export async function function_auto_run(function_name) {
    let arguments_ = Array.from(arguments);
    await function_auto(function_name);
    await function_run(function_name, arguments_.slice(1));
}