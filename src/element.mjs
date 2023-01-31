import { defaults_get } from './defaults_get.mjs';
import { element_style } from './element_style.mjs';
import { element_child_add } from './element_child_add.mjs';
export function element(parent, tag_name) {
    let e = document.createElement(tag_name);
    element_style(e, defaults_get(element));
    element_child_add(parent, e);
}