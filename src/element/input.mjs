import { element } from './../element.mjs';
import { element_style_default } from './style/default.mjs';
export function element_input(parent, placeholder) {
    let b = element(parent, 'input');
    element_style_default(b, element_input);
    b.placeholder = placeholder;
    return b;
}