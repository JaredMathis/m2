import { function_run } from "./function_run.mjs";

let function_name = process.argv[2];
let function_arguments = process.argv.slice(3);
let result = await function_run(function_name, function_arguments);
console.log({function_name, function_arguments, result})


