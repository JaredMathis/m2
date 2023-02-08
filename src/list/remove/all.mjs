import { for_each } from './../../for/each.mjs';
import { list_remove } from './../remove.mjs';
export function list_remove_all(list, removals) {
    for_each(removals, r => list_remove(list, r));
}