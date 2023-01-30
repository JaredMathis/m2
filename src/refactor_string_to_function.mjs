import { log } from './log.mjs';
import { functions_all_get } from './functions_all_get.mjs';
import { for_each_async } from './for_each_async.mjs';
export async function refactor_string_to_function(string_value, function_name) {
    let f = await functions_all_get();
    await for_each_async(f, async function_name => {
        log(function_name);
    });
}