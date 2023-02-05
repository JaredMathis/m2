import { string_split } from './../../split.mjs';
import { string_new_line } from './../../new/line.mjs';
export function string_split_new_line(existing) {
    return string_split(existing, string_new_line());
}