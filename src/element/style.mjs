import { merge } from './../merge.mjs';
export function element_style(e, style) {
    merge(e.style, style);
}