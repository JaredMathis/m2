import { list_slice } from './../../slice.mjs';
import { arguments_assert } from './../../../arguments/assert.mjs';
import { number_negative_not } from './../../../number/negative/not.mjs';
import { list_is } from './../../is.mjs';
export function list_slice_begin_from(list, index) {
    arguments_assert(arguments, list_is, number_negative_not);
    return list_slice(list, 0, index);
}