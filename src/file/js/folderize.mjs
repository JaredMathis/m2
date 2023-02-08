import { ast_exports_get } from './../../ast/exports/get.mjs';
import { file_rename } from './../rename.mjs';
import { log } from './../../log.mjs';
import { list_first } from './../../list/first.mjs';
import { ast_node_type_is } from './../../ast/node/type/is.mjs';
import { js_parse } from './../../js/parse.mjs';
import { file_read } from './../read.mjs';
import { function_path_get } from './../../function/path/get.mjs';
export async function file_js_folderize(file_path, output_path) {
    let ast;
    try {
        let text = await file_read(file_path);
        ast = js_parse(text);
    } catch (e) {
        log('Error parsing ' + file_path);
        throw e;
    }
    let exports = ast_exports_get(ast);
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
    let function_path_new = function_path_get(output_path, function_name);
    await file_rename(file_path, function_path_new);
    return function_path_new;
}