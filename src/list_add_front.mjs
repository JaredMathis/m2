import { list_concat_front } from './list_concat_front.mjs';
export function list_add_front(list, item) {
    list_concat_front(list, [item]);
}