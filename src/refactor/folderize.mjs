import { directory_source_file_paths_for_each } from './../directory/source/file/paths/for/each.mjs';
import { file_js_folderize_imports } from './../file/js/folderize/imports.mjs';
export async function refactor_folderize() {
    await directory_source_file_paths_for_each(file_path_for_each);
    async function file_path_for_each(file_path) {
        await file_js_folderize_imports(file_path, directory_source);
    }
}