import {js_parse} from './js_parse.mjs';

export async function function_ast_get(function_name) {
    let text = await file_read(function_name);
    let ast = js_parse(text);
    return text;
}