import { list_add } from './list_add.mjs';
export function list_add_if_not_exists(list, node_modules) {
    if (!list.includes(node_modules)) {
        list_add(node_modules);
    }
}