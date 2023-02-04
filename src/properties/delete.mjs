import { for_each_key } from './../for/each/key.mjs';
export function properties_delete(object) {
    for_each_key(object, k => {
        delete object[k];
    });
}