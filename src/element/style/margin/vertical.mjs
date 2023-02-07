import { element_style } from "../../style.mjs";

export function element_style_margin_vertical(e, value) {
    element_style(e, {
        marginTop: value,
        marginBottom: value,
    })
}