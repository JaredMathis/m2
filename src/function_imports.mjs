import { log } from './log.mjs';
import { ast_identifiers } from './ast_identifiers.mjs';
import { ast_imports } from './ast_imports.mjs';
import { directory_read } from './directory_read.mjs';
import { directory_root_get } from './directory_root_get.mjs';
import { function_path_to_name } from './function_path_to_name.mjs';
import { list_intersection } from './list_intersection.mjs';
import { list_difference } from './list_difference.mjs';
import { function_ast_transform } from './function_ast_transform.mjs';
import { js_parse } from './js_parse.mjs';
import { list_concat_front } from './list_concat_front.mjs';
import { for_each } from './for_each.mjs';
import { list_remove } from './list_remove.mjs';
import { ast_imports_for_each } from './ast_imports_for_each.mjs';
export async function function_imports(function_name) {
    await function_ast_transform(function_name, async function transform(args) {
        let {ast} = args;
        let imports_existing = ast_imports(ast);
        let identifiers_existing = ast_identifiers(ast);
        let extras = list_difference(imports_existing, identifiers_existing);
        let removals = [];
        ast_imports_for_each(ast, import_statement => {
            if (extras.includes(import_statement.name)) {
                removals.push(import_statement.node);
            }
        });
        console.log(removals);
        for_each(removals, r => list_remove(ast.body, r));
        let files = await directory_read(directory_root_get());
        let function_names = files.map(f => function_path_to_name(f));
        let function_name_identifiers = list_intersection(identifiers_existing, function_names);
        let without_me = list_difference(function_name_identifiers, [function_name]);
        let missing = list_difference(without_me, imports_existing);
        let missing_imports = missing.map(m => `import { ${ m } } from './${ m }.mjs'`).join(';');
        let parsed = js_parse(missing_imports);
        list_concat_front(ast.body, parsed.body);
    });
}