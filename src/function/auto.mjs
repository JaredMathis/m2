import { function_open } from './open.mjs';
import { function_split } from './split.mjs';
export async function function_auto(function_name) {
    await function_open(function_name);
    await function_split(function_name);
}