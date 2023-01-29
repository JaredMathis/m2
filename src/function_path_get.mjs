import { path_join } from "./path_join.mjs";

export function function_path_get(function_name) {
    return path_join([`src`, `${function_name}.mjs`]);
}
