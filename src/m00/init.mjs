import { run } from './../run.mjs';
import { package_scripts } from './../package/scripts.mjs';
import { gitignore_node_modules } from './../gitignore/node/modules.mjs';
import { directory_new } from './../directory/new.mjs';
import { directory_source_get } from './../directory/source/get.mjs';
import { index_new } from './../index/new.mjs';
export async function m00_init() {
    await gitignore_node_modules();
    await package_scripts();
    await run(`npm install webpack webpack-cli --save-dev`);
    await directory_new(directory_source_get());
    await directory_new('public');
    await index_new();
}