import { function_ast_transform } from './function_ast_transform.mjs';
import { js_parse } from './js_parse.mjs';
import { function_new_if_not_exists } from './function_new_if_not_exists.mjs';
import { log } from './log.mjs';
import { functions_all_get } from './functions_all_get.mjs';
import { for_each_async } from './for_each_async.mjs';
import { arguments_assert } from './arguments_assert.mjs';
import { string_is } from './string_is.mjs';
export async function refactor_string_to_function(string_value, function_name) {
    arguments_assert(arguments, string_is, string_is);
    let f = await functions_all_get();
    await function_new_if_not_exists(function_name);
    await function_ast_transform(function_name, args => {
        let {ast} = args;
        ast.body = js_parse(`export function ${ function_name }() { return \`${ string_value }\` }`).body;
    });
    await for_each_async(f, async fn => {
        log(fn);
    });
}