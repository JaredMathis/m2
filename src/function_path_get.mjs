import { directory_root_get } from './directory_root_get.mjs';
import { path_join } from './path_join.mjs';
export function function_path_get(function_name) {
    return path_join([
        directory_root_get(),
        `${ function_name }.mjs`
    ]);
}