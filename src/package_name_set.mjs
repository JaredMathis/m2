import { file_read } from './file_read.mjs';
export async function package_name_set(name) {
    let json = await file_read('package.json');
    let parsed = json_from(json);
}

function json_from(json) {
    return JSON.parse(json);
}
