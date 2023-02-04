import { directory_source_get } from './../../get.mjs';
import { directory_read } from './../../../read.mjs';
export async function directory_source_file_paths_get() {
    let directory_source = directory_source_get();
    let file_paths = await directory_read(directory_source);
    return file_paths;
}