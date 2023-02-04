import { file_json_transform } from './../file/json/transform.mjs';
import { package_path_get } from './path/get.mjs';
export function package_transform(transform) {
    return file_json_transform(package_path_get(), transform);
}