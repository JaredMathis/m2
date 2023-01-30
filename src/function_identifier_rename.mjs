import { function_ast_transform } from './function_ast_transform.mjs';
export async function function_identifier_rename(function_name, identifier_before, identifier_after) {
    await function_ast_transform(function_name, async args => {
        let {ast} = args;
    });
}