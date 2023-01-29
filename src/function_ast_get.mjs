import {js_parse} from './js_parse.mjs';
import { function_read } from './function_read.mjs';
export async function function_ast_get(function_name) {
    let text = await function_read(function_name);
    let ast = js_parse(text);
    return ast;
}


