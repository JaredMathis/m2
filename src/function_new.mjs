import { file_write } from "./file_write.mjs";
import { path_join } from "./path_join.mjs";

export async function function_new(name) {
    const file_path = path_join([`src`, `${name}.mjs`]);
    await file_write(file_path, `export function ${name}() {
}`);
}