import { noop } from './../noop.mjs';
import { function_ast_transform } from './ast/transform.mjs';
export async function function_whitespace(function_name) {
    await function_ast_transform(function_name, noop);
}