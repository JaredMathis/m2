import { directory_source_get } from './directory_source_get.mjs';
import { m00_directory_root_get } from './m00_directory_root_get.mjs';
export function directory_root_get() {
    return [
        m00_directory_root_get(),
        directory_source_get()
    ];
}