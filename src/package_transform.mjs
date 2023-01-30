import { file_json_transform } from './file_json_transform.mjs';
import { package_path_get } from './package_path_get.mjs';

export function package_transform(transform) {
    return file_json_transform(package_path_get(), transform);
}
