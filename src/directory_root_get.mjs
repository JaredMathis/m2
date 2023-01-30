import m00_directory_root_get from './m00_directory_root_get.mjs';
export function directory_root_get() {
    return [`./src`];
    return [m00_directory_root_get(), `./src`];
}