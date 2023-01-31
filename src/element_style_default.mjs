import { defaults_get } from './defaults_get.mjs';
import { element_style } from './element_style.mjs';

export function element_style_default(e, component) {
    element_style(e, defaults_get(component));
}
