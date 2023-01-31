import { function_imports } from './function_imports.mjs';
import { function_open } from './function_open.mjs';
export async function function_auto(function_name) {
    await function_open(function_name);
    await function_imports(function_name);
}