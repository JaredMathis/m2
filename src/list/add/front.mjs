import { defined_is } from './../../defined/is.mjs';
import { arguments_assert } from './../../arguments/assert.mjs';
import { list_concat_front } from './../concat/front.mjs';
import { list_is } from './../is.mjs';
export function list_add_front(list, item) {
    arguments_assert(arguments, list_is, defined_is);
    list_concat_front(list, [item]);
}