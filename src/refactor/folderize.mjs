import { for_each_async } from '../for_each_async.mjs';
import { function_path_to_name } from '../function_path_to_name.mjs';
import { directory_read } from './../directory_read.mjs';
import { directory_source_get } from './../directory_source_get.mjs';
import { file_js_folderize } from './../file/js/folderize.mjs';
import { functions_all_for_each } from './../functions_all_for_each.mjs';
import { function_imports } from './../function_imports.mjs';
export async function refactor_folderize() {
    let directory_source = directory_source_get();
    let file_paths = await directory_read(directory_source);
    await for_each_async(file_paths, async file_path => {
        await file_js_folderize(file_path, directory_source);
        await functions_all_for_each(fn => function_imports(fn));
    });
}