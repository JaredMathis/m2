import { assert } from './assert.mjs';
import { integer_to } from './integer_to.mjs';
import { package_transform } from './package_transform.mjs';
export async function package_bump() {
    await package_transform(p => {
        if (!p.version) {
            p.version = '0.0.0';
        } else {
            let split_by = '.';
            let parts = p.version.split(split_by);
            assert(parts.length === 3);
            let last = parts.pop();
            let last_number = integer_to(last);
            last_number++;
            parts.push(last_number);
            p.version = parts.join(split_by);
        }
    });
}