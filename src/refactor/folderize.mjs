import { directory_root_get } from "../directory_root_get.mjs";
import { directory_read } from "../directory_read.mjs";

export async function refactor_folderize() {
    let root_directory = directory_root_get();
    let file_paths = await directory_read(root_directory);
    console.log(file_paths)
}