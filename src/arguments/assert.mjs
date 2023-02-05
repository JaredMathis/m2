import { list_slice_end_to } from './../list/slice/end/to.mjs';
import { undefined_is } from './../undefined/is.mjs';
import { assert } from './../assert.mjs';
import { for_each } from './../for/each.mjs';
export function arguments_assert(_arguments) {
    assert(!undefined_is(_arguments));
    let types = Array.from(arguments).slice(1);
    assert(_arguments.length === types.length);
    for_each(types, (type, index) => {
        let argument = _arguments[index];
        assert(type(argument));
    });
}