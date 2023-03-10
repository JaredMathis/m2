import { arguments_assert } from './../../arguments/assert.mjs';
import { string_is } from './../../string/is.mjs';
import { js_parse_body } from './body.mjs';
export function js_parse_expression(source_code) {
    arguments_assert(arguments, string_is);
    const parsed_body = js_parse_body(source_code);
    let first = parsed_body[0];
    let {expression} = first;
    return expression;
}