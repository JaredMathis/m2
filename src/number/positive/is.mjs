import { number_at_least } from '../at/least.mjs';
export function number_positive_is(n) {
    return number_at_least(1)(n);
}