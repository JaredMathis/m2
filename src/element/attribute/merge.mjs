import { for_each } from './../../for/each.mjs';
import { element_attribute_set } from './set.mjs';
export function element_attribute_merge(e, attributes) {
    for_each(attributes, (attribute_value, attribute_key) => {
        element_attribute_set(e, attribute_key, attribute_value);
    });
}