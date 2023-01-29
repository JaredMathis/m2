let function_name = process.argv[2];
let function_arguments = process.argv.slice(3);
let imported = await import(`./${function_name}.mjs`);
let _function = imported[function_name];
let result = await _function(...function_arguments);
console.log({function_name, function_arguments, result})