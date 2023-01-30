import { file_json_read } from './file_json_read.mjs';
export async function package_name_set(name) {
    let p = await file_json_read('package.json');
    merge(p, {name});
}



