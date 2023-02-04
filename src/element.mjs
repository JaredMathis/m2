import { arguments_assert } from './arguments/assert.mjs';
import { defined_is } from './defined/is.mjs';
import { string_is } from './string/is.mjs';
import { element_child_add } from './element/child/add.mjs';
import { element_style_default } from './element/style/default.mjs';
export function element(parent, tag_name) {
    arguments_assert(arguments, defined_is, string_is);
    let e = document.createElement(tag_name);
    element_style_default(e, element);
    element_child_add(parent, e);
}