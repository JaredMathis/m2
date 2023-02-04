import { arguments_assert } from './../arguments/assert.mjs';
import { defined_is } from './../defined/is.mjs';
import { string_is } from './../string/is.mjs';
import { function_is } from './../function/is.mjs';
import { button } from './../button.mjs';
import { element_style } from './../element/style.mjs';
export function button_quarter(parent, text, on_click) {
    arguments_assert(arguments, defined_is, string_is, function_is);
    let b = button(parent, text, on_click);
    element_style(b, { width: '25%' });
    return b;
}