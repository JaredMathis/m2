export function function_ast_transform_visit(fn, for_each) {
    await function_ast_transform(fn, args => {
        let {ast} = args;
        ast_visit(ast, v => {
            for_each(v)
        });
})
}