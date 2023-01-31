import { function_is } from './function_is.mjs';
import { defaults_data } from './defaults_data.mjs';
import { property_has } from './property_has.mjs';
export function defaults_get(name) {
    if (function_is(name)) {
        name = name.name;
    }
    if (property_has(defaults_data(), name)) {
        return defaults_data()[name];
    }
    return {};
}