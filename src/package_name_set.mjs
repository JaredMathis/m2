import { file_json_transform } from './file_json_transform.mjs';
import { merge } from './merge.mjs';
import { package_path_get } from './package_path_get.mjs';
export async function package_name_set(name) {
    const transform = p => {
        merge(p, { name });
    };
    await package_transform(transform);
}


function package_transform(transform) {
    return file_json_transform(package_path_get(), transform);
}

