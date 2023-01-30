import { for_each_key } from './for_each_key.mjs';
export function properties_delete(object) {
    for_each_key(object, k => {
        delete object[k];
    });
}