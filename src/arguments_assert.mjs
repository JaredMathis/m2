import { undefined_is } from './undefined_is.mjs';
import { assert } from './assert.mjs';
import { for_each } from './for_each.mjs';

export function arguments_assert(_arguments) {
    assert(!undefined_is(_arguments));
    let types = arguments.slice(1);
    assert(_arguments.length === types.length);
    for_each(types, (type, index) => {
        let argument = _arguments[index];
        assert(type(argument));
    });
}
