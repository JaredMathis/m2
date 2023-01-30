import { file_read } from './file_read.mjs';
import { json_from } from './json_from.mjs';
export async function package_name_set(name) {
    const file_path = 'package.json';
    let json = await file_read(file_path);
    let parsed = json_from(json);
}


