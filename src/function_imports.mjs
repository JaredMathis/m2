import { ast_identifiers } from './ast_identifiers.mjs';
import { ast_imports } from './ast_imports.mjs';
import { directory_read } from './directory_read.mjs';
import { directory_root_get } from './directory_root_get.mjs';
import { function_path_to_name } from './function_path_to_name.mjs';
import { list_intersection } from './list_intersection.mjs';
import { list_difference } from './list_difference.mjs';
export async function function_imports(function_name) {
    await function_ast_transform(function_name, async function transform(ast) {
        let files = await directory_read(directory_root_get());
        let imports_existing = ast_imports(ast);
        let identifiers_existing = ast_identifiers(ast);
        let function_names = files.map(f => function_path_to_name(f));
        let function_name_identifiers = list_intersection(identifiers_existing, function_names);
        let without_me = list_difference(function_name_identifiers, [function_name]);
        let missing = list_difference(without_me, imports_existing);
        console.log(missing)
    });
    if (false) {
        log({
        });
    }
}