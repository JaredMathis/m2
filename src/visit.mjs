import { for_each } from "./for_each.mjs";

export function visit(item, valid_child, for_each_child) {
    for_each(item, child => {
        if (!valid_child(child)) {
            return;
        }
        for_each_child(child);
        visit(child, valid_child, for_each_child);
    })
}