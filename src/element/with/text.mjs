import { element_text } from './../text.mjs';
import { element } from './../../element.mjs';
export function element_with_text(parent, tag_name, text) {
    let e = element(parent, tag_name);
    element_text(e, text);
    return e;
}