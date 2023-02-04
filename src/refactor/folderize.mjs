import { directory_read } from "../directory_read.mjs";
import { directory_source_get } from "../directory_source_get.mjs";
import { file_js_folderize } from "../file_js_folderize.mjs";
import { for_each } from "../for_each.mjs";

export async function refactor_folderize() {
    let directory_source = directory_source_get();
    let file_paths = await directory_read(directory_source);
    for_each(file_paths, async file_path => {
        file_js_folderize(file_path, directory_source);
    })
}