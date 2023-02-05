import { arguments_assert } from './../../arguments/assert.mjs';
import { list_is } from './../is.mjs';
export function list_random_item(items) {
    arguments_assert(arguments, list_is);
    return items[Math.floor(Math.random() * items.length)];
}