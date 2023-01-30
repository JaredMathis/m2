import { directory_root_get } from './directory_root_get.mjs';
import { file_exists } from './file_exists.mjs';
import { path_join } from './path_join.mjs';
import { undefined_is } from './undefined_is.mjs';
import { assert } from './assert.mjs';
import { for_each_async } from './for_each_async.mjs';
export async function function_path_get(function_name) {
    let result;
    await for_each_async(directory_root_get(), async directory_path => {
        let file_path = path_join([
            directory_path,
            `${ function_name }.mjs`
        ]);
        if (await file_exists(file_path)) {
            assert(undefined_is(result))
            result = file_path;
        }
    })
    if (undefined_is(result)) {
        result = path_join([
            './src',
            `${ function_name }.mjs`
        ]);
    }
    return result;
}