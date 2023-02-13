import { directory_read } from './../../directory/read.mjs';
import { directory_root_get } from './../../directory/root/get.mjs';
import { function_path_to_name } from './../../function/path/to/name.mjs';
import { list_add_all } from './../../list/add/all.mjs';
import { for_each_async } from './../../for/each/async.mjs';
export async function functions_all_get() {
    let result = [];
    await for_each_async(await directory_root_get(), async directory_path => {
        let files = await directory_read(directory_path);
        let function_names = files.map(f => function_path_to_name(f, directory_path));
        list_add_all(result, function_names);
    });
    return result;
}