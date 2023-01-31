import { arguments_assert } from './arguments_assert.mjs';
import { defined_is } from './defined_is.mjs';
import { function_is } from './function_is.mjs';
export function click(e, on_click) {
    arguments_assert(arguments, defined_is, function_is);
    e.addEventListener(on_click);
}