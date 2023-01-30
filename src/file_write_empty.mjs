import { file_write } from './file_write.mjs';
export function file_write_empty(file_path) {
    return file_write(file_path, '');
}