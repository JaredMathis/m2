import { file_json_read } from './../../file/json/read.mjs';
import { file_exists } from './../../file/exists.mjs';
export async function m00_config_get() {
    let config_path = `./m00_config.json`;
    if (!await file_exists(config_path)) {
        return {};
    }
    return await file_json_read(config_path);
}