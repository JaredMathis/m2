import { for_each } from './../../../for/each.mjs';
import { function_ast_transform } from './../transform.mjs';
import { ast_visit } from './../../../ast/visit.mjs';
export async function function_ast_transform_visit(fn, for_each) {
    await function_ast_transform(fn, args => {
        let {ast} = args;
        ast_visit(ast, v => {
            for_each(v);
        });
    });
}