import { file_read } from './file_read.mjs';
import { file_empty_if_not_exists } from './file_empty_if_not_exists.mjs';
import { file_write } from './file_write.mjs';
export async function file_transform(file_path, transform) {
    await file_empty_if_not_exists(file_path);
    let existing = await file_read(file_path);
    let transformed = transform(existing);
    await file_write(file_path, transformed);
}