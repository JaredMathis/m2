import { file_read } from './file_read.mjs';
import { json_from } from './json_from.mjs';
export async function package_name_set(name) {
    let json = await file_read('package.json');
    let parsed = json_from(json);
}


