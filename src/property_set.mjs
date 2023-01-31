import { assert } from './assert.mjs';
export function property_set(object, property_name, value) {
    assert(!object.hasOwnProperty(property_name));
    object[property_name] = value;
}