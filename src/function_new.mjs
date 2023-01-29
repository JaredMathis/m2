import { file_write } from "./file_write.mjs";
import { path_join } from "./path_join.mjs";

export async function function_new(name) {
    const file_path = function_path_get(name);
    await file_write(file_path, `export function ${name}() {
}`);
}

function function_path_get(function_name) {
    return path_join([`src`, `${function_name}.mjs`]);
}
