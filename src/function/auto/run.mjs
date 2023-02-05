import { list_slice_end_to } from './../../list/slice/end/to.mjs';
import { function_run } from './../run.mjs';
import { function_auto } from './../auto.mjs';
export async function function_auto_run(function_name) {
    let arguments_ = Array.from(arguments);
    await function_auto(function_name);
    await function_run(function_name, list_slice_end_to(arguments_, 1));
}