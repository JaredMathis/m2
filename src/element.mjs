import { element_child_add } from './element_child_add.mjs';
import { element_style_default } from './element_style_default.mjs';
export function element(parent, tag_name) {
    let e = document.createElement(tag_name);
    element_style_default(e, element);
    element_child_add(parent, e);
}


