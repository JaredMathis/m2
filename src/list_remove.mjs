import {assert} from "./assert.mjs";

export function list_remove(list, item) {
    let index = list.indexOf(item);
    assert(index >= 0);
    list.splice(index, 1);
}