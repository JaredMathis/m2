import { list_add } from './../add.mjs';
import { for_each_async } from './../../for/each/async.mjs';
export async function list_filter_async(list, filter) {
    let result = [];
    await for_each_async(list, async item => {
        if (await filter(item)) {
            list_add(result, item);
        }
    });
    return result;
}