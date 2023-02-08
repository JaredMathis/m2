import { arguments_assert } from './../../../arguments/assert.mjs';
import { defined_is } from './../../../defined/is.mjs';
export function element_style_display_none(e) {
    arguments_assert(arguments, defined_is);
    element_style_merge(e, { display: 'none' });
}