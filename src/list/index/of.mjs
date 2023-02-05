import { arguments_assert } from './../../arguments/assert.mjs';
import { list_is } from './../is.mjs';
export function list_index_of(list, item) {
    arguments_assert(arguments, list_is);
    return list.indexOf(item);
}