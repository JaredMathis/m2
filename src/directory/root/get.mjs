import { m00_config_get } from './../../m00/config/get.mjs';
import { directory_source_get } from './../source/get.mjs';
import { m00_directory_root_get } from './../../m00/directory/root/get.mjs';
export async function directory_root_get() {
    if (false) {
        let config = await m00_config_get();
    }
    return [
        m00_directory_root_get(),
        directory_source_get()
    ];
}