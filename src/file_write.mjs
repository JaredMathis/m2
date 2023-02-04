import fs from 'fs';
import path from 'path';
import { file_exists } from './file_exists.mjs';
export async function file_write(file_path, file_contents) {
    await file_directory_create_if_not_exists(file_path);
    await fs.promises.writeFile(file_path, file_contents, 'utf8');
}

async function file_directory_create_if_not_exists(file_path) {
    let directory_path = path.dirname(file_path);
    if (!await file_exists(directory_path)) {
        await fs.promises.mkdir(directory_path, { recursive: true });
    }
}
