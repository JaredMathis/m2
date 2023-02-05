import { arguments_assert } from './arguments/assert.mjs';
import { number_negative_not } from './number/negative/not.mjs';
export function range(n) {
    arguments_assert(arguments, number_negative_not);
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(i);
    }
    return result;
}