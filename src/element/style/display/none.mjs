import { element_style } from './../../style.mjs';
import { arguments_assert } from './../../../arguments/assert.mjs';
import { defined_is } from './../../../defined/is.mjs';
export function element_style_display_none(e) {
    arguments_assert(arguments, defined_is);
    element_style(e, { display: 'none' });
}