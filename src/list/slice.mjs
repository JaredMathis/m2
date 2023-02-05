import { arguments_assert } from './../arguments/assert.mjs';
import { number_negative_not } from './../number/negative/not.mjs';
import { list_is } from './is.mjs';
export function list_slice(list, from, to) {
    arguments_assert(arguments, list_is, number_negative_not, number_negative_not);
    return list.slice(from, to);
}