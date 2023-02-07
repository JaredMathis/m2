import { directory_create_if_not_exists } from './../directory/create/if/not/exists.mjs';
import { package_scripts } from './../package/scripts.mjs';
import { gitignore_node_modules } from './../gitignore/node/modules.mjs';
import { directory_source_get } from './../directory/source/get.mjs';
export async function m00_init() {
    await gitignore_node_modules();
    await package_scripts();
    await directory_create_if_not_exists(directory_source_get());
}