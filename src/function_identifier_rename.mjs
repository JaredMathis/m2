import { undefined_is } from './undefined_is.mjs';
import { string_is } from './string_is.mjs';
import { assert } from './assert.mjs';
import { ast_visit } from './ast_visit.mjs';
import { ast_identifier_is } from './ast_identifier_is.mjs';
import { function_ast_transform } from './function_ast_transform.mjs';
import { for_each } from './for_each.mjs';
export async function function_identifier_rename(function_name, identifier_before, identifier_after) {
    let types = [
        string_is,
        string_is,
        string_is
    ];
    arguments_assert(arguments, types);
    await function_ast_transform(function_name, async args => {
        let {ast} = args;
        ast_visit(ast, v => {
            let {node} = v;
            if (ast_identifier_is(node)) {
                if (node.name === identifier_before) {
                    node.name = identifier_after;
                }
            }
        });
    });
}
function arguments_assert(_arguments) {
    assert(!undefined_is(_arguments));
    let types = arguments.slice(1);
    assert(_arguments.length === types.length);
    for_each(types, (type, index) => {
        let argument = _arguments[index];
        assert(type(argument));
    });
}