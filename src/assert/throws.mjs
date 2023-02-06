import { assert } from './../assert.mjs';
export function assert_throws(lambda) {
    let success = false;
    try {
        lambda();
    } catch (e) {
        success = true;
    }
    assert(success);
}