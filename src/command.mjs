import { function_run } from './function_run.mjs';
import { log } from './log.mjs';
async function command() {
    let function_name = process.argv[2];
    let function_arguments = process.argv.slice(3);
    let result = await function_run(function_name, function_arguments);
    log({
        function_name,
        function_arguments,
        result
    });
}
command();