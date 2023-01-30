import { package_transform } from './package_transform.mjs';
import { error } from './error.mjs';
export async function package_bump() {
    await package_transform(p => {
        if (!p.version) {
            p.version = '0.0.0';
        } else {
            todo();
        }
    });
}

function todo() {
    error('TODO');
}
