import fs from 'fs';
import path from 'path';
export async function file_write(file_path, file_contents) {
    let directory_path = path.dirname(file_path);
    await fs.promises.mkdir(directory_path, { recursive: true })
    await fs.promises.writeFile(file_path, file_contents, 'utf8');
}