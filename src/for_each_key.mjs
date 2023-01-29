export function for_each_key(list, lambda) {
    for (let i in list) {
        lambda(i);
    }
}