export async function function_run(function_name, function_arguments) {
    let imported = await import(`./${ function_name }.mjs`);
    let _function = imported[function_name];
    let result = await _function(...function_arguments);
    return result;
}