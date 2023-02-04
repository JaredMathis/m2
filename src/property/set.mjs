import { property_has } from './has.mjs';
import { assert } from './../assert.mjs';
export function property_set(object, property_name, value) {
    assert(!property_has(object, property_name));
    object[property_name] = value;
}