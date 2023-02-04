import { file_read } from './read.mjs';
import { file_empty_if_not_exists } from './empty/if/not/exists.mjs';
import { file_write } from './write.mjs';
export async function file_transform(file_path, transform) {
    await file_empty_if_not_exists(file_path);
    let existing = await file_read(file_path);
    let transformed = transform(existing);
    await file_write(file_path, transformed);
}