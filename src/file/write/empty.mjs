import { file_write } from './../write.mjs';
export function file_write_empty(file_path) {
    return file_write(file_path, '');
}