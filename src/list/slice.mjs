import { arguments_assert } from './../arguments/assert.mjs';
import { number_negative_not } from './../number/negative/not.mjs';
export function list_slice(list, from, to) {
    arguments_assert(arguments, number_negative_not, number_negative_not);
    return list.slice(from, to);
}