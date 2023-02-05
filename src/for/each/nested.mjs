import { for_each } from './../each.mjs';
export function for_each_nested(list, for_each_pair) {
    for_each(list, a => {
        for_each(list, b => {
            for_each_pair(a, b);
        });
    });
}