import { directory_read } from "../directory_read.mjs";
import { directory_source_get } from "../directory_source_get.mjs";

export async function refactor_folderize() {
    let root_directory = directory_source_get();
    let file_paths = await directory_read(root_directory);
    console.log(root_directory, file_paths)
}