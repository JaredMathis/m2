import { string_new_line } from './string_new_line.mjs';
export function string_join_new_line(lines) {
    return lines.join(string_new_line());
}