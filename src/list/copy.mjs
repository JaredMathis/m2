import { arguments_assert } from '../arguments/assert.mjs';
import { list_is } from './is.mjs';
export function list_copy(list) {
    arguments_assert(arguments, list_is);
    return list.slice();
}