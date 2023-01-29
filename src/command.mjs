let function_name = process.argv[2];
let function_arguments = process.argv.slice(3);
let _function = await import(function_name + '.mjs');
console.log({function_name, function_arguments})