import { log } from './../../log.mjs';
import { list_first } from './../../list_first.mjs';
import { ast_node_type_is } from './../../ast_node_type_is.mjs';
import { for_each } from './../../for_each.mjs';
import { js_parse } from './../../js_parse.mjs';
import { file_read } from './../../file_read.mjs';
import { function_path_get } from './../../function_path_get.mjs';
import { file_rename } from './../rename.mjs';
export async function file_js_folderize(file_path, output_path) {
    let exports = [];
    let ast;
    try {
        let text = await file_read(file_path);
        ast = js_parse(text);
    } catch (e) {
        console.log('Error parsing ' + file_path);
        throw e;
    }
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
    let function_path_new = function_path_get(output_path, function_name).replaceAll('_', '/');
    await file_rename(file_path, function_path_new);
}