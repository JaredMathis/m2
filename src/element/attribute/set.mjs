import { arguments_assert } from './../../arguments/assert.mjs';
import { defined_is } from './../../defined/is.mjs';
import { string_is } from './../../string/is.mjs';
export function element_attribute_set(e, attribute, value) {
    arguments_assert(arguments, defined_is, string_is, string_is);
    e.setAttribute(attribute, value);
}