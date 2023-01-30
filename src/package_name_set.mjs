import { merge } from './merge.mjs';
import { file_json_read } from './file_json_read.mjs';
import { file_json_write } from './file_json_write.mjs';
export async function package_name_set(name) {
    const file_path = 'package.json';
    let p = await file_json_read(file_path);
    merge(p, { name });
    await file_json_write(file_path, p);
}



