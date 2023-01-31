import { defaults_data } from './defaults_data.mjs';
import { property_has } from './property_has.mjs';
export function defaults_get(name) {
    if (property_has(defaults_data(), name)) {
        return defaults_data()[name];
    }
    return {};
}