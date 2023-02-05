import path from 'path';
import { directory_create_if_not_exists } from './../../../../../directory/create/if/not/exists.mjs';
export async function file_directory_create_if_not_exists(file_path) {
    let directory_path = path.dirname(file_path);
    await directory_create_if_not_exists(directory_path);
}