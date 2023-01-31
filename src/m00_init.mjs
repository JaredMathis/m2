import { package_scripts } from './package_scripts.mjs';
import { gitignore_node_modules } from './gitignore_node_modules.mjs';
import { directory_new } from './directory_new.mjs';
import { directory_source_get } from './directory_source_get.mjs';
export async function m00_init() {
    await gitignore_node_modules();
    await package_scripts();
    await directory_new(directory_source_get());
}