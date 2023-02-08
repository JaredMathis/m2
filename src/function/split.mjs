import { log } from './../log.mjs';
import { for_each } from './../for/each.mjs';
import { function_ast_transform } from './ast/transform.mjs';
export function function_split(function_name) {
    function_ast_transform(function_name, ast => {
        for_each(ast.body, b => {
            log(b);
        });
    });
}