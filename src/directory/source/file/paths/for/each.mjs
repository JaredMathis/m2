import { directory_source_file_paths_get } from './../get.mjs';
import { for_each_async } from './../../../../../for/each/async.mjs';
export async function directory_source_file_paths_for_each(file_path_for_each) {
    let file_paths = await directory_source_file_paths_get();
    await for_each_async(file_paths, file_path_for_each);
}