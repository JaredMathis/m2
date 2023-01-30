import { directory_read } from './directory_read.mjs';
import { directory_root_get } from './directory_root_get.mjs';
import { function_path_to_name } from './function_path_to_name.mjs';
import { list_add_all } from './list_add_all.mjs';
import { for_each_async } from './for_each_async.mjs';
export async function functions_all_get() {
    let result = [];
    await for_each_async(directory_root_get(), async directory_path => {
        let files = await directory_read(directory_path);
        let function_names = files.map(f => function_path_to_name(f));
        list_add_all(result, function_names);
    });
    return result;
}