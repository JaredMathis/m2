import { defaults_data } from './data.mjs';
import { property_set } from './../property/set.mjs';
export function defaults_set(name, default_value) {
    property_set(defaults_data(), name, default_value);
}