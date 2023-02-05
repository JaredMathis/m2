import { functions_all_get } from './functions/all/get.mjs';
import { for_each_async } from './for/each/async.mjs';
import { function_run } from './function/run.mjs';
export async function tests() {
    let function_names = await functions_all_get();
    let test_names = function_names.filter(f => f.endsWith('_test'));
    await for_each_async(test_names, async test_name => {
        await function_run(test_name, []);
    });
}