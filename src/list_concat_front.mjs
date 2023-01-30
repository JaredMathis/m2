export function list_concat_front(list_a, list_to_concat_in_front) {
    list_a.splice(0, 0, ...list_to_concat_in_front);
}