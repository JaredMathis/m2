import { merge } from './merge.mjs';
import { file_write } from './file_write.mjs';
import { file_json_read } from './file_json_read.mjs';
import { json_to } from './json_to.mjs';
export async function package_name_set(name) {
    const file_path = 'package.json';
    let p = await file_json_read(file_path);
    merge(p, { name });
    await file_json_write(file_path, p);
}


async function file_json_write(file_path, p) {
    let json = json_to(p);
    await file_write(file_path, json);
}

