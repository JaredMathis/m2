import { property_initialize } from './../property/initialize.mjs';
import { package_transform } from './transform.mjs';
import { m00_directory_root_get } from './../m00/directory/root/get.mjs';
import { path_join } from './../path/join.mjs';
export async function package_scripts() {
    await package_transform(p => {
        property_initialize(p, 'scripts', {});
        let m00_directory_root = m00_directory_root_get();
        p.scripts.m = `node ${ path_join([
            m00_directory_root,
            `command.mjs`
        ]) }`;
        p.scripts.mg = `node ${ path_join([
            m00_directory_root,
            `commandgit.mjs`
        ]) }`;
        p.scripts.mil = `npm i m00@latest`;
        p.scripts.mi = `npm run mil && npm run m`;
        p.scripts.mig = `npm run mil && npm run mg`;
    });
}