export function for_each(list, lambda) {
    for (let l of list) {
        lambda(l);
    }
}