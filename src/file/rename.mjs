import fs from 'fs';
import path from 'path';
import { file_exists } from '../file_exists.mjs';
import { error } from '../error.mjs';
import { file_directory_create_if_not_exists } from './directory/create/if/not/exists.mjs';
export async function file_rename(file_path_from, file_path_to) {
    if (path.resolve(file_path_from) == path.resolve(file_path_to)) {
        return;
    }
    if (await file_exists(file_path_to)) {
        error('File already exists: ' + file_path_to);
    }
    await file_directory_create_if_not_exists(file_path_to);
    await fs.promises.rename(file_path_from, file_path_to);
}