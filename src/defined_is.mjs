import { undefined_is } from './undefined_is.mjs';
export function defined_is(v) {
    return !undefined_is(v);
}