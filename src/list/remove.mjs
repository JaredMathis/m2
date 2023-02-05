import { list_index_of } from './index/of.mjs';
import { assert } from './../assert.mjs';
export function list_remove(list, item) {
    let index = list_index_of(list, item);
    assert(index >= 0);
    list.splice(index, 1);
}