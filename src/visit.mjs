import { for_each } from "./for_each.mjs";

export function visit(item, valid_child, for_each_child) {
    for_each(item, node => {
        if (!valid_child(node)) {
            return;
        }
        let v = {node};
        for_each_child(v);
        visit(node, valid_child, for_each_child);
    })
}