import { element_style_default } from './element_style_default.mjs';
import { arguments_assert } from './arguments_assert.mjs';
import { defined_is } from './defined_is.mjs';
import { element } from './element.mjs';
import { function_is } from './function_is.mjs';
import { string_is } from './string_is.mjs';
export function button(parent, text, on_click) {
    arguments_assert(arguments, defined_is, string_is, function_is);
    let b = element(parent, 'button');
    element_style_default(b, button);
    return b;
}