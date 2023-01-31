import { tautology } from './tautology.mjs';
import { arguments_assert } from './arguments_assert.mjs';
import { list_concat_front } from './list_concat_front.mjs';
import { list_is } from './list_is.mjs';
export function list_add_front(list, item) {
    arguments_assert(arguments, list_is, tautology);
    list_concat_front(list, [item]);
}