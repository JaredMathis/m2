import { log } from './log.mjs';
import { list_first } from './list_first.mjs';
import { ast_node_type_is } from './ast_node_type_is.mjs';
import { for_each } from './for_each.mjs';
import { js_parse } from './js_parse.mjs';
import { file_read } from './file_read.mjs';
import { function_path_get } from './function_path_get.mjs';
import { directory_source_get } from './directory_source_get.mjs';
export async function file_js_folderize(file_path) {
    let exports = [];
    let text = await file_read(file_path);
    let ast = js_parse(text);
    for_each(ast.body, b => {
        if (ast_node_type_is(b, 'ExportNamedDeclaration')) {
            exports.push(b);
        }
    });
    if (exports.length !== 1) {
        return;
    }
    let first = list_first(exports);
    let {declaration} = first;
    if (!ast_node_type_is(declaration, 'FunctionDeclaration')) {
        return;
    }
    let {id} = declaration;
    let function_name = id.name;
    let function_path_new = function_path_get(directory_source_get(), function_name);
    log(function_path_new);
}