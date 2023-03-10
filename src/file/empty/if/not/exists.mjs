import { file_exists } from './../../../exists.mjs';
import { file_write_empty } from './../../../write/empty.mjs';
export async function file_empty_if_not_exists(file_path) {
    if (!await file_exists(file_path)) {
        await file_write_empty(file_path);
    }
}