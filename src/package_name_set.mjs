import { file_json_transform } from './file_json_transform.mjs';
import { merge } from './merge.mjs';
import { package_path_get } from './package_path_get.mjs';
export async function package_name_set(name) {
    await file_json_transform(package_path_get(), p => {
        merge(p, { name });
    });
}


