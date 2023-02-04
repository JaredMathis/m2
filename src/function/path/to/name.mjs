import path from 'path';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_is } from '../../../string/is.mjs';
export function function_path_to_name(function_path, directory_root) {
    arguments_assert(arguments, string_is, string_is);
    return path.relative(directory_root, function_path).replaceAll('/', '_').replaceAll('\\', '_').replace('.mjs', '');
}