import { directory_source_file_paths_for_each } from './../../../directory/source/file/paths/for/each.mjs';
import { log } from './../../../log.mjs';
import { list_add } from './../../../list/add.mjs';
import { file_read } from './../../read.mjs';
export async function file_js_all_complexity() {
    let result = [];
    await directory_source_file_paths_for_each(async function file_path_for_each(file_path) {
        let contents = await file_read(file_path);
        let size = contents.length;
        list_add(result, {
            file_path,
            size
        });
    });
    result.sort((a, b) => a.size - b.size)
    log(result);
}