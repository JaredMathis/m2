import { arguments_assert } from './arguments_assert.mjs';
import { defined_is } from './defined_is.mjs';
import { string_is } from './string_is.mjs';
export function element_text(e, text) {
    arguments_assert(arguments, defined_is, string_is);
    e.innerHTML = text;
}