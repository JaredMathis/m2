import { log } from './../../log.mjs';
import { list_first } from './../../list/first.mjs';
import { ast_node_type_is } from './../../ast/node/type/is.mjs';
import { for_each } from './../../for/each.mjs';
import { js_parse } from './../../js/parse.mjs';
import { file_read } from './../read.mjs';
import { function_path_get } from './../../function/path/get.mjs';
export async function file_js_folderize(file_path, output_path) {
    let exports = [];
    let ast;
    try {
        let text = await file_read(file_path);
        ast = js_parse(text);
    } catch (e) {
        log('Error parsing ' + file_path);
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
    let function_path_new = function_path_get(output_path, function_name);
    return function_path_new;
}