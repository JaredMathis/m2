import { element_child_add } from './element_child_add.mjs';
export function element(parent, tag_name) {
    let e = document.createElement(tag_name);
    element_child_add(parent, e);
}