import { arguments_assert } from './../../../../arguments/assert.mjs';
import { defined_is } from './../../../../defined/is.mjs';
import { string_is } from './../../../../string/is.mjs';
import { element_style } from './../../../style.mjs';
export function element_style_width_min_max(e, value) {
    arguments_assert(arguments, defined_is, string_is);
    element_style(e, {
        minWidth: value,
        maxWidth: value
    });
}