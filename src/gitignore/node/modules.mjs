import { string_split_new_line } from './../../string/split/new/line.mjs';
import { list_add_if_not_exists } from './../../list/add/if/not/exists.mjs';
import { string_join_new_line } from './../../string/join/new/line.mjs';
import { file_transform } from './../../file/transform.mjs';
export async function gitignore_node_modules() {
    await file_transform('.gitignore', transform);
    function transform(existing) {
        let lines = string_split_new_line(existing);
        list_add_if_not_exists(lines, 'node_modules');
        let transformed = string_join_new_line(lines);
        return transformed;
    }
}