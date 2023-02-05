import { number_is } from './../is.mjs';
import { arguments_assert } from './../../arguments/assert.mjs';
export function number_at_least(at_least) {
    arguments_assert(arguments, number_is);
    return function number_at_least_inner(n) {
        return n >= at_least;
    };
}