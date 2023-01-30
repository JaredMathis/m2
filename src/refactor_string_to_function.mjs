import { function_new_if_not_exists } from './function_new_if_not_exists.mjs';
import { log } from './log.mjs';
import { functions_all_get } from './functions_all_get.mjs';
import { for_each_async } from './for_each_async.mjs';
export async function refactor_string_to_function(string_value, function_name) {
    let f = await functions_all_get();
    await function_new_if_not_exists(function_name);
    await for_each_async(f, async fn => {
        log(fn);
    });
}