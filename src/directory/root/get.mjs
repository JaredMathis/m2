import { m00_config_get } from './../../m00/config/get.mjs';
import { directory_source_get } from './../source/get.mjs';
import { m00_directory_root_get } from './../../m00/directory/root/get.mjs';
export async function directory_root_get() {
    let config = await m00_config_get();
    if (config.directory_root) {
        return config.directory_root;
    }
    return [
        m00_directory_root_get(),
        directory_source_get()
    ];
}