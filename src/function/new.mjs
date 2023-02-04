import { directory_source_get } from './../directory/source/get.mjs';
import { file_write } from './../file/write.mjs';
import { function_path_get } from './path/get.mjs';
export async function function_new(name) {
    const file_path = function_path_get(directory_source_get(), name);
    await file_write(file_path, `export function ${ name }() {
    
}`);
}