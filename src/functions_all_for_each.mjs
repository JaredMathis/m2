import { for_each_async } from './for_each_async.mjs';
import { functions_all_get } from './functions_all_get.mjs';
import { function_run } from './function_run.mjs';
export async function functions_all_for_each(for_each_function) {
    let function_names = await functions_all_get();
    await for_each_async(function_names, async function_name => {
        await function_run(for_each_function, [function_name].concat(process.argv.slice(4)));
    });
}