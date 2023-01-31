import { property_set } from './property_set.mjs';
let defaults = [];
export function defaults_set(name, default_value) {
    property_set(defaults, name, default_value);
}