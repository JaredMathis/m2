import { arguments_assert } from "./arguments/assert.mjs";
import { number_at_least } from "./number/at/least.mjs";

export function range(n) {
    arguments_assert(arguments, number_at_least(0));
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(i);
    }
    return result;
}