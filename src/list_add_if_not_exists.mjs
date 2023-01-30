export function list_add_if_not_exists(node_modules) {
    if (!list.includes(node_modules)) {
        list_add(node_modules);
    }
}
