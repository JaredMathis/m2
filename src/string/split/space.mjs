import { string_space } from './../space.mjs';
import { string_split } from './../split.mjs';
export function string_split_space(s) {
    return string_split(s, string_space());
}