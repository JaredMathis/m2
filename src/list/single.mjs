import { arguments_assert } from './../arguments/assert.mjs';
import { assert } from './../assert.mjs';
import { list_first } from './first.mjs';
import { list_is } from './is.mjs';
export function list_single(list) {
    arguments_assert(arguments, list_is);
    assert(list.length === 1);
    return list_first(list);
}