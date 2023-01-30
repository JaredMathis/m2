import { file_read } from './file_read.mjs';
export async function package_name_set(name) {
    let json = await file_read('package.json');
    let parsed = JSON.parse(json);
}