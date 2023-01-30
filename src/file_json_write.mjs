import { file_write } from './file_write.mjs';
import { json_to } from './json_to.mjs';

export async function file_json_write(file_path, p) {
    let json = json_to(p);
    await file_write(file_path, json);
}
