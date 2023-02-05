import { list_first } from './first.mjs';
import { arguments_assert } from './../arguments/assert.mjs';
import { for_each } from './../for/each.mjs';
import { list_is } from './is.mjs';
export function list_min(list) {
    arguments_assert(arguments, list_is);
    let min = list_first(list);
    for_each(list, value => {
        if (value < min) {
            min = value;
        }
    });
    return min;
}