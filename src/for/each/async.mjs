export async function for_each_async(list, lambda) {
    for (let l of list) {
        await lambda(l);
    }
}