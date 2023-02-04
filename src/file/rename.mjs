import { file_exists } from "../file_exists.mjs";
import { error } from "../error.mjs";
import fs from 'fs';
import {file_directory_create_if_not_exists} from './file/directory/create/if/not/exists.mjs';
export function file_rename(file_path_from, file_path_to) {
    if (await file_exists(file_path_to)) {
        error('File already exists: ' + file_path_to)
    }
    await file_directory_create_if_not_exists(file_path_to);
    await fs.promises.rename(file_path_from, file_path_to);
}