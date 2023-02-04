import { for_each_async } from './../for/each/async.mjs';
import { directory_read } from './../directory/read.mjs';
import { directory_source_get } from './../directory/source/get.mjs';
import { file_js_folderize } from './../file/js/folderize.mjs';
import { functions_all_for_each } from './../functions/all/for/each.mjs';
import { function_imports } from './../function/imports.mjs';
export async function refactor_folderize() {
    let directory_source = directory_source_get();
    let file_paths = await directory_read(directory_source);
    await for_each_async(file_paths, async file_path => {
        await file_js_folderize(file_path, directory_source);
        await functions_all_for_each(fn => function_imports(fn));
    });
}