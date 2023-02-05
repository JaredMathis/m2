export function list_get_wrapped(list, index) {
    let modded = index % list.length;
    modded += list.length;
    modded %= list.length;
    return list[modded];
}