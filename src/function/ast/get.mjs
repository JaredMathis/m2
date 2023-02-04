import { js_parse } from './../../js/parse.mjs';
import { function_read } from './../read.mjs';
export async function function_ast_get(function_name) {
    let text = await function_read(function_name);
    let ast = js_parse(text);
    return ast;
}