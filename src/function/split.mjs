import { ast_node_type_is } from './../ast/node/type/is.mjs';
import { function_new_if_not_exists } from './new/if/not/exists.mjs';
import { ast_exports_get } from './../ast/exports/get.mjs';
import { list_single } from './../list/single.mjs';
import { function_imports } from './imports.mjs';
import { function_ast_transform } from './ast/transform.mjs';
import { for_each_async } from './../for/each/async.mjs';
import { for_each } from '../for/each.mjs';
import { list_remove } from '../list/remove.mjs';
export async function function_split(function_name) {
    await function_ast_transform(function_name, async args => {
        let {ast} = args;
        let function_declarations = ast.body.filter(b => ast_node_type_is(b, 'FunctionDeclaration'));
        await for_each_async(function_declarations, async fd => {
            const fd_name = fd.id.name;
            await function_new_if_not_exists(fd_name);
            await function_ast_transform(fd_name, args => {
                let {ast} = args;
                let exports = ast_exports_get(ast);
                let export_ = list_single(exports);
                export_.declaration = fd;
            });
        });
        await for_each_async(function_declarations, async fd => {
            const fd_name = fd.id.name;
            await function_imports(fd_name);
        });
        for_each(function_declarations, fd => list_remove(ast.body, fd));
    });
    await function_imports(function_name);
}