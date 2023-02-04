import path from 'path';
export function function_path_to_name(function_path) {
    return path.relative('src', function_path).replaceAll('/', '_').replace('.mjs', '');
    ;
}