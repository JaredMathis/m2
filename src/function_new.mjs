import { file_write } from "./file_write.mjs";

export async function function_new(name) {
    await file_write(`${name}.mjs`, `export function ${name}() {
}`);
}