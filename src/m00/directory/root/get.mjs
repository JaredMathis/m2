import { directory_source_get } from './../../../directory/source/get.mjs';
import { path_join } from './../../../path/join.mjs';
export function m00_directory_root_get() {
    return path_join([
        `./node_modules/m00/`,
        directory_source_get()
    ]);
}