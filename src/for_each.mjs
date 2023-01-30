import { for_each_key } from './for_each_key.mjs';
export function for_each(list, lambda) {
    for_each_key(list, key => {
        let l = list[key];
        lambda(l, key);
    });
}