import { element } from './element.mjs';
import { list_concat_front } from './list_concat_front.mjs';
export function list_add_front(list, element) {
    list_concat_front(list, [element]);
}