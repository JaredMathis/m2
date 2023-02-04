import { file_exists } from "../file_exists.mjs";
import { error } from "../error.mjs";
import fs from 'fs';

export function file_rename(file_path_from, file_path_to) {
    if (await file_exists(file_path_to)) {
        error('File already exists: ' + file_path_to)
    }
    await fs.promises.rename(file_path_from, file_path_to);
}