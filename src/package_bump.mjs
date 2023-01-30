import { package_transform } from './package_transform.mjs';
import { todo } from './todo.mjs';
export async function package_bump() {
    await package_transform(p => {
        if (!p.version) {
            p.version = '0.0.0';
        } else {
            todo();
        }
    });
}


