import { file_json_transform } from './file_json_transform.mjs';
import { merge } from './merge.mjs';
export async function package_name_set(name) {
    await file_json_transform('package.json', p => {
        merge(p, { name });
    });
}