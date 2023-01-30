import { string_new_line } from "./string_new_line.mjs";

export function string_split_new_line(existing) {
    return existing.split(string_new_line());
}

