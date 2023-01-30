import { for_each } from "./for_each.mjs";

export function list_unique(list) {
    let result = [];

    for_each(list, a => {
        if (result.includes(a)) {
            return;
        }
        result.push(a);
    })
}