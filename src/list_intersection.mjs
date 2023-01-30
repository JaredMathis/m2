export function list_intersection(list_a, list_b) {
    let result = list_a.filter(a => list_b.includes(a));
    return result;
}