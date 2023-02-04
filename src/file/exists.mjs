import fs from 'fs';
export function file_exists(file_path) {
    return fs.promises.access(file_path, fs.constants.F_OK).then(() => true).catch(() => false);
}