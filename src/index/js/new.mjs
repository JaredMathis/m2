import { file_write } from './../../file/write.mjs';
import { directory_source_get } from './../../directory/source/get.mjs';
import { path_join } from './../../path/join.mjs';
export async function index_js_new() {
    await file_write(path_join([
        directory_source_get(),
        `index.js`
    ]), `
import main from './main.mjs';
main();
`);
}