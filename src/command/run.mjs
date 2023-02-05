import { list_slice_end_to } from './../list/slice/end/to.mjs';
Error.stackTraceLimit = Infinity;
import { function_run } from './../function/run.mjs';
import { log } from './../log.mjs';
export async function command_run() {
    let function_name = process.argv[2];
    let function_arguments = list_slice_end_to(process.argv, 3);
    let function_result = await function_run(function_name, function_arguments);
    const result = {
        function_name,
        function_arguments,
        function_result
    };
    log(result);
    return result;
}