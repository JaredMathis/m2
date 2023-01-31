import { defaults_data } from './defaults_data.mjs';
import { property_set } from './property_set.mjs';
export function defaults_set(name, default_value) {
    property_set(defaults_data(), name, default_value);
}