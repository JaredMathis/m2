import { path_join } from './path_join.mjs';

export function function_path_get(directory_path, function_name) {
    result = path_join([
        directory_path,
        `${function_name}.mjs`
    ]);
    return result;
}
