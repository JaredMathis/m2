import { test_c } from './c.mjs';
import { test_d } from './d.mjs';
export function test_b() {
    return 'b' + test_c() + test_d();
}