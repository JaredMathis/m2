import { file_write } from './../write.mjs';
import { json_to } from './../../json/to.mjs';
export async function file_json_write(file_path, p) {
    let json = json_to(p);
    await file_write(file_path, json);
}