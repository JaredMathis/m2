import { test_b } from './b.mjs';
import { test_c } from './c.mjs';
import { test_d } from './d.mjs';
export function test_e() {
    return test_b() + test_c() + test_d();
}