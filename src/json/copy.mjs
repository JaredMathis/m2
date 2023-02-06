import { json_from } from './from.mjs';
import { json_to } from './to.mjs';
export function json_copy(j) {
    let json = json_to(j);
    return json_from(json);
}