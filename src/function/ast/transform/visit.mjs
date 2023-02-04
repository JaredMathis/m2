import { function_ast_transform } from './../transform.mjs';
import { ast_visit } from './../../../ast/visit.mjs';
export async function function_ast_transform_visit(fn, on_visit) {
    await function_ast_transform(fn, args => {
        let {ast} = args;
        ast_visit(ast, v => {
            on_visit(v);
        });
    });
}