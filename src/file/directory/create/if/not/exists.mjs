import path from 'path';
import fs from 'fs';
import { file_exists } from './../../../../exists.mjs';
export async function file_directory_create_if_not_exists(file_path) {
    let directory_path = path.dirname(file_path);
    if (!await file_exists(directory_path)) {
        await fs.promises.mkdir(directory_path, { recursive: true });
    }
}