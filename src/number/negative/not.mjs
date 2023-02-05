import { number_at_least } from './../at/least.mjs';
export function number_negative_not(n) {
    return number_at_least(0)(n);
}