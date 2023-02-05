import { list_slice_end_to } from './../../../list/slice/end/to.mjs';
import { for_each_async } from './../../../for/each/async.mjs';
import { functions_all_get } from './../get.mjs';
import { function_run } from './../../../function/run.mjs';
import { string_is } from './../../../string/is.mjs';
export async function functions_all_for_each(for_each_function) {
    let function_names = await functions_all_get();
    await for_each_async(function_names, async function_name => {
        if (string_is(for_each_function)) {
            await function_run(for_each_function, [function_name].concat(list_slice_end_to(process.argv, 4)));
        } else {
            await for_each_function(function_name);
        }
    });
}