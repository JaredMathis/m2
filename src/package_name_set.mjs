import { file_json_read } from './file_json_read.mjs';
export async function package_name_set(name) {
    const file_path = 'package.json';
    await file_json_read(file_path);
}



