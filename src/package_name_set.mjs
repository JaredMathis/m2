import { merge } from './merge.mjs';
import { package_transform } from './package_transform.mjs';
export async function package_name_set(name) {
    const transform = p => {
        merge(p, { name });
    };
    await package_transform(transform);
}



