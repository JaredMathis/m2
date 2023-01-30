import fs from 'fs';
export async function file_read(file_path) {
    let result = await fs.promises.readFile(file_path, 'utf8');
    return result;
}