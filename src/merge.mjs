import { for_each } from './for_each.mjs';
export function merge(b, a) {
    for_each(a, (a_i, key) => {
        b[a_i] = a_i;
    });
}