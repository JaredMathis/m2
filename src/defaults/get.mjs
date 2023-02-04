import { function_is } from './../function/is.mjs';
import { defaults_data } from './data.mjs';
import { property_has } from './../property/has.mjs';
export function defaults_get(name) {
    if (function_is(name)) {
        name = name.name;
    }
    if (property_has(defaults_data(), name)) {
        return defaults_data()[name];
    }
    return {};
}