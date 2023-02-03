import { js_parse } from './js_parse.mjs';
import { log } from './log.mjs';
import { file_read } from './file_read.mjs';
export async function file_js_folderize(file_path) {
    let text = await file_read(file_path);
    let ast = js_parse(text);
    console.log(ast);
}