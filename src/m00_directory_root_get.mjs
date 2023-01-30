import { path_join } from "./path_join.mjs";

export function m00_directory_root_get() {
    return path_join([`./node_modules/m00/`, `./src`]);
}