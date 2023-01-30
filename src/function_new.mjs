import { file_write } from './file_write.mjs';
import { function_path_find } from './function_path_get.mjs';
export async function function_new(name) {
    const file_path = await function_path_find(name);
    await file_write(file_path, `export function ${ name }() {
    
}`);
}