import { file_read } from './file_read.mjs';
import { json_from } from './json_from.mjs';

export async function file_json_read(file_path) {
    let json = await file_read(file_path);
    let parsed = json_from(json);
    return parsed;
}