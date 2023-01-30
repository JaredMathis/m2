import recursive from 'recursive-readdir';
import {file_exists} from './file_exists.mjs';
export async function directory_read(directory_path) {
    if (!await file_exists(directory_path)) {
        return [];
    }
    let result = await recursive(directory_path);
    return result;
}