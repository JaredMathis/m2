import { directory_source_get } from './../source/get.mjs';
import { m00_directory_root_get } from './../../m00/directory/root/get.mjs';
export function directory_root_get() {
    return [
        m00_directory_root_get(),
        directory_source_get()
    ];
}