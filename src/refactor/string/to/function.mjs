import { functions_all_for_each } from './../../../functions/all/for/each.mjs';
import { arguments_assert } from './../../../arguments/assert.mjs';
import { string_is } from './../../../string/is.mjs';
import { function_constant_string } from './../../../function/constant/string.mjs';
import { function_refactor_string_to_function } from './../../../function/refactor/string/to/function.mjs';
export async function refactor_string_to_function(string_value, function_name) {
    arguments_assert(arguments, string_is, string_is);
    await function_constant_string(function_name, string_value);
    await functions_all_for_each(async fn => {
        await function_refactor_string_to_function(fn, string_value, function_name);
    });
}