import { file_js_folderize } from './../folderize.mjs';
import { functions_all_for_each } from './../../../functions/all/for/each.mjs';
import { function_imports } from './../../../function/imports.mjs';
export async function file_js_folderize_imports(file_path, output_path) {
    let function_path_new = await file_js_folderize(file_path, output_path);
    await functions_all_for_each(fn => function_imports(fn));
}