import { properties_delete } from './properties_delete.mjs';
import { merge } from './merge.mjs';

export function properties_replace(node, e) {
    properties_delete(node);
    merge(node, e);
}
