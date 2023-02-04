import { path_join } from './../../path/join.mjs';
import { arguments_assert } from './../../arguments/assert.mjs';
import { string_is } from './../../string/is.mjs';
export function function_path_get(directory_path, function_name) {
    arguments_assert(arguments, string_is, string_is);
    let result = path_join([
        directory_path,
        `${ function_name.replaceAll('_', '/') }.mjs`
    ]);
    return result;
}