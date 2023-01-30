import { arguments_assert } from "./arguments_assert.mjs";
import { string_is } from "./string_is.mjs";

export function js_parse_expression(source_code) {
    arguments_assert(arguments, string_is)
    const parsed = js_parse(source_code);
    let parsed_body = parsed.body;
    let {expression} = parsed_body;
    return expression;
}