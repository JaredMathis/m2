import { directory_root_get } from "../directory_root_get.mjs";

export async function refactor_folderize() {
    let root_directory = directory_root_get();
    let file_paths = await directory_read(directory_path);
    console.log(file_paths)
}