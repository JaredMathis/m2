import { file_write } from "./file_write.mjs";

export async function function_new(name) {
    const file_path = `${name}.mjs`;
    await file_write(file_path, `export function ${name}() {
}`);
}