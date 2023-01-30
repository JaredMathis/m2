import { directory_read } from './directory_read.mjs';
import { directory_root_get } from './directory_root_get.mjs';
import { function_path_to_name } from './function_path_to_name.mjs';

export async function functions_all_get() {
    let files = await directory_read(directory_root_get());
    let function_names = files.map(f => function_path_to_name(f));
    return function_names;
}
