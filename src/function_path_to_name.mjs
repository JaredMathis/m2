import path from 'path';
import { directory_source_get } from './directory_source_get.mjs';
export function function_path_to_name(function_path) {
    return path.relative(directory_source_get(), function_path).replaceAll('/', '_').replace('.mjs', '');
}