import { run } from './../run.mjs';
import { package_scripts } from './../package/scripts.mjs';
import { gitignore_node_modules } from './../gitignore/node/modules.mjs';
import { directory_source_get } from './../directory/source/get.mjs';
import { index_new } from './../index/new.mjs';
import { file_directory_create_if_not_exists } from '../file/directory/create/if/not/exists.mjs';
export async function m00_init() {
    await gitignore_node_modules();
    await package_scripts();
    await file_directory_create_if_not_exists(directory_source_get());
    if (false) {
        await run(`npm install webpack webpack-cli --save-dev`);
        await file_directory_create_if_not_exists('public');
        await index_new();
    }
}