import { function_ast_transform } from './../ast/transform.mjs';
import { function_new_if_not_exists } from './../new/if/not/exists.mjs';
import { js_parse_body } from './../../js/parse/body.mjs';
export async function function_constant_string(function_name, string_value) {
    await function_new_if_not_exists(function_name);
    await function_ast_transform(function_name, args => {
        let {ast} = args;
        const source_code = `export function ${ function_name }() { return \`${ string_value }\` }`;
        ast.body = js_parse_body(source_code);
    });
}