import { list_first } from './list_first.mjs';
import { ast_node_type_is } from './ast_node_type_is.mjs';
import { for_each } from './for_each.mjs';
import { js_parse } from './js_parse.mjs';
import { file_read } from './file_read.mjs';
export async function file_js_folderize(file_path) {
    let exports = [];
    let text = await file_read(file_path);
    let ast = js_parse(text);
    for_each(ast.body, b => {
        if (ast_node_type_is(b, 'ExportNamedDeclaration')) {
            exports.push(b);
        }
    });
    if (exports.length === 1) {
        let first = list_first(exports);
    }
}