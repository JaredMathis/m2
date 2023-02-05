import { arguments_assert } from './../arguments/assert.mjs';
import { defined_is } from './../defined/is.mjs';
import { json_to } from './to.mjs';
export function json_equal(a, b) {
    arguments_assert(arguments, defined_is, defined_is);
    return json_to(a) === json_to(b);
}