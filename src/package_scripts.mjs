import { property_initialize } from './property_initialize.mjs';
import { package_transform } from './package_transform.mjs';
import { m00_directory_root_get } from './m00_directory_root_get.mjs';
export async function package_scripts() {
    await package_transform(p => {
        property_initialize(p, 'scripts', {});
        let m00_directory_root = m00_directory_root_get();
        p.scripts.m = `node ${ m00_directory_root }command.mjs`;
        p.scripts.mg = `node ${ m00_directory_root }command_git.mjs`;
    });
}