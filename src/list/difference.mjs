export function list_difference(list_a, list_b) {
    return list_a.filter(a => !list_b.includes(a));
}