import { property_has } from './property_has.mjs';
export function property_initialize(object, property_name, value_if_property_not_exists) {
    if (property_has(object, property_name)) {
        return;
    }
    object[property_name] = value_if_property_not_exists;
}