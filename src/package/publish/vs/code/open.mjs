import { package_publish } from './../../../publish.mjs';
import { vs_code_open } from './../../../../vs/code/open.mjs';
import { arguments_assert } from './../../../../arguments/assert.mjs';
import { string_is } from '../../../../string/is.mjs';
export async function package_publish_vs_code_open(path_to_directory) {
    arguments_assert(arguments, string_is);
    await package_publish();
    await vs_code_open(path_to_directory);
}