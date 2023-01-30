import { property_initialize } from './property_initialize.mjs';
import { package_transform } from './package_transform.mjs';
export async function package_scripts() {
    await package_transform(p => {
        property_initialize(p, 'scripts', {});
        p.scripts.m = `node ./node_modules/m00/src/command.mjs`;
        p.scripts.mg = `node ./node_modules/m00/src/command_git.mjs`;
    });
}