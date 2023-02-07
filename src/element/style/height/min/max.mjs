import { element_style } from './../../../style.mjs';
export function element_style_height_min_max(e, value) {
    element_style(e, {
        minHeight: value,
        maxHeight: value
    });
}