import { file_json_transform } from './file_json_transform.mjs';
import { merge } from './merge.mjs';
export async function package_name_set(name) {
    await file_json_transform(package_path_get(), p => {
        merge(p, { name });
    });
}

function package_path_get() {
    return 'package.json';
}
