import { file_exists } from './../../../../file/exists.mjs';
export async function directory_create_if_not_exists(directory_path) {
    if (!await file_exists(directory_path)) {
        await fs.promises.mkdir(directory_path, { recursive: true });
    }
}