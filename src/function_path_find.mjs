import { directory_root_get } from './directory_root_get.mjs';
import { file_exists } from './file_exists.mjs';
import { undefined_is } from './undefined_is.mjs';
import { assert } from './assert.mjs';
import { for_each_async } from './for_each_async.mjs';
import { function_path_get } from './function_path_get.mjs';
export async function function_path_find(function_name) {
    let result;
    await for_each_async(directory_root_get(), async directory_path => {
        let file_path = function_path_get(directory_path, function_name);
        if (await file_exists(file_path)) {
            assert(undefined_is(result));
            result = file_path;
        }
    });
    if (undefined_is(result)) {
        result = function_path_get('./src', function_name);
    }
    return result;
}


