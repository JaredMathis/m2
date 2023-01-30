import { integer_to } from './integer_to';
import { package_transform } from './package_transform.mjs';
import { todo } from './todo.mjs';
export async function package_bump() {
    await package_transform(p => {
        if (!p.version) {
            p.version = '0.0.0';
        } else {
            let parts = p.version.split('.');
            assert(parts.length === 3);
            let last = parts.pop();
            let last_number = integer_to(last);
        }
    });
}



