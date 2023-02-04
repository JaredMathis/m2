import { file_json_read } from './read.mjs';
import { file_json_write } from './write.mjs';
export async function file_json_transform(file_path, transform) {
    let parsed = await file_json_read(file_path);
    await transform(parsed);
    await file_json_write(file_path, parsed);
}