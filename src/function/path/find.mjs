import { directory_root_get } from './../../directory/root/get.mjs';
import { file_exists } from './../../file/exists.mjs';
import { undefined_is } from './../../undefined/is.mjs';
import { assert } from './../../assert.mjs';
import { for_each_async } from './../../for/each/async.mjs';
import { function_path_get } from './get.mjs';
import { arguments_assert } from './../../arguments/assert.mjs';
import { string_is } from './../../string/is.mjs';
import { error } from './../../error.mjs';
export async function function_path_find(function_name) {
    arguments_assert(arguments, string_is);
    let result;
    await for_each_async(directory_root_get(), async directory_path => {
        let file_path = function_path_get(directory_path, function_name);
        if (await file_exists(file_path)) {
            assert(undefined_is(result));
            result = file_path;
        }
    });
    return result;
}