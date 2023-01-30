import { directory_source_get } from './directory_source_get.mjs';
import { path_join } from './path_join.mjs';
export function m00_directory_root_get() {
    return path_join([
        `./node_modules/m00/`,
        directory_source_get()
    ]);
}