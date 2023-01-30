import { for_each } from './for_each.mjs';
import { list_add } from './list_add.mjs';
export function list_unique(list) {
    let result = [];
    for_each(list, element => {
        if (result.includes(element)) {
            return;
        }
        list_add(result, element);
    });
    return result;
}