import { function_imports } from './imports.mjs';
import { function_open } from './open.mjs';
export async function function_auto(function_name) {
    await function_open(function_name);
    await function_imports(function_name);
}