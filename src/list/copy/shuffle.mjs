import { list_copy } from './../copy.mjs';
import { list_shuffle } from './../shuffle.mjs';
export function list_copy_shuffle(list) {
    let result = list;
    result = list_copy(result);
    result = list_shuffle(result);
    return result;
}