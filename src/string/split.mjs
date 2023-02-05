import { arguments_assert } from './../arguments/assert.mjs';
import { string_is } from './is.mjs';
export function string_split(s, split_by) {
    arguments_assert(arguments, string_is, string_is);
    return s.split(split_by);
}