import { functions_all_get } from './functions_all_get.mjs';
import { for_each_async } from './for_each_async.mjs';
import { arguments_assert } from './arguments_assert.mjs';
import { string_is } from './string_is.mjs';
import { function_constant_string } from './function_constant_string.mjs';
import { function_refactor_string_to_function } from './function_refactor_string_to_function.mjs';
export async function refactor_string_to_function(string_value, function_name) {
    arguments_assert(arguments, string_is, string_is);
    let f = await functions_all_get();
    await function_constant_string(function_name, string_value);
    await for_each_async(f, async fn => {
        await function_refactor_string_to_function(fn, string_value, function_name);
    });
}