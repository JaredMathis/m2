import { directory_source_file_paths_get } from './../directory/source/file/paths/get.mjs';
import { file_js_folderize_imports } from './../file/js/folderize/imports.mjs';
import { for_each_async } from './../for/each/async.mjs';
export async function refactor_folderize() {
    let file_paths = await directory_source_file_paths_get();
    await for_each_async(file_paths, directory_source_for_each);
    async function directory_source_for_each(file_path) {
        await file_js_folderize_imports(file_path, directory_source);
    }
}