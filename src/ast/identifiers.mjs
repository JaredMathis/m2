import { ast_filter } from './filter.mjs';
import { ast_node_identifier_is } from './node/identifier/is.mjs';
import { for_each } from './../for/each.mjs';
export function ast_identifiers(ast) {
    let filtered = ast_filter(ast, ast_node_identifier_is);
    let mapped = filtered.map(i => i.name);
    let counts = {};
    for_each(mapped, m => {
        if (!counts[m]) {
            counts[m] = 0;
        }
        counts[m]++;
    });
    return counts;
}