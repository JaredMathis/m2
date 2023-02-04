import fs from 'fs';
import { file_directory_create_if_not_exists } from './directory/create/if/not/exists.mjs';
export async function file_write(file_path, file_contents) {
    await file_directory_create_if_not_exists(file_path);
    await fs.promises.writeFile(file_path, file_contents, 'utf8');
}