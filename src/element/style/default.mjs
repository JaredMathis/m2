import { defaults_get } from './../../defaults/get.mjs';
import { element_style } from './../style.mjs';
export function element_style_default(e, component) {
    element_style(e, defaults_get(component));
}