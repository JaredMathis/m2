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
    assert(arguments.length === types.length);
    for_each(types, (type, index) => {
        let argument = arguments[index];
        assert(type(argument));
    });
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