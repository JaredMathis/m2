import { ast_identifiers } from './ast_identifiers.mjs';
import { ast_imports } from './ast_imports.mjs';
import {function_ast_get} from './function_ast_get.mjs';
import {log} from './log.mjs';
import {directory_read} from './directory_read.mjs';
import { directory_root_get } from './directory_root_get.mjs';
import { function_path_to_name } from './function_path_to_name.mjs';
import { list_intersection } from './list_intersection.mjs';
import { list_difference } from './list_difference.mjs';
export async function function_imports(function_name) {
    let ast = await function_ast_get(function_name);
    let imports_existing = ast_imports(ast);
    let identifiers_existing = ast_identifiers(ast);

    let files = await directory_read(directory_root_get());
    let function_names = files.map(f => function_path_to_name(f));

    let function_name_identifiers = list_intersection(identifiers_existing, function_names);

    let missing = list_difference(function_name_identifiers, imports_existing);

    log(function_name_identifiers);
}