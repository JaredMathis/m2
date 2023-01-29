import { file_write } from "./file_write.mjs";

export function function_new(name) {
    file_write(`${name}.mjs`, `export function ${name}() {
}`);
}