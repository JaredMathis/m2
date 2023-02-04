import { click } from './click.mjs';
import { element_text } from './element/text.mjs';
import { element_style_default } from './element/style/default.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { defined_is } from './defined/is.mjs';
import { element } from './element.mjs';
import { function_is } from './function/is.mjs';
import { string_is } from './string/is.mjs';
export function button(parent, text, on_click) {
    arguments_assert(arguments, defined_is, string_is, function_is);
    let b = element(parent, 'button');
    element_style_default(b, button);
    element_text(b, text);
    click(b, on_click);
    return b;
}