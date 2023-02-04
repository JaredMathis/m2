import { log } from './log.mjs';
import { ast_identifiers } from './ast_identifiers.mjs';
import { ast_imports } from './ast_imports.mjs';
import { list_intersection } from './list_intersection.mjs';
import { list_difference } from './list_difference.mjs';
import { function_ast_transform } from './function_ast_transform.mjs';
import { js_parse } from './js_parse.mjs';
import { list_concat_front } from './list_concat_front.mjs';
import { for_each } from './for_each.mjs';
import { list_remove } from './list_remove.mjs';
import { list_add } from './list_add.mjs';
import { ast_imports_for_each } from './ast_imports_for_each.mjs';
import { keys } from './keys.mjs';
import { functions_all_get } from './functions_all_get.mjs';
import path from 'path';
import { function_path_find } from './function_path_find.mjs';
export async function function_imports(function_name) {
    await function_ast_transform(function_name, async function transform(args) {
        let {ast} = args;
        let imports_existing = await ast_imports(ast);
        let identifiers_existing_counts = ast_identifiers(ast);
        let identifiers_existing_all = keys(identifiers_existing_counts);
        let identifiers_existing = [];
        for_each(identifiers_existing_counts, (count, identifier) => {
            if (count >= 3) {
                list_add(identifiers_existing, identifier);
            }
        });
        let extras = list_difference(imports_existing, identifiers_existing);
        let removals = [];
        await ast_imports_for_each(ast, import_statement => {
            if (extras.includes(import_statement.name)) {
                removals.push(import_statement.node);
            }
        });
        if (false) {
            log({
                identifiers_existing_counts,
                identifiers_existing,
                imports_existing,
                extras,
                removals
            });
        }
        for_each(removals, r => list_remove(ast.body, r));
        let function_names = await functions_all_get();
        let function_name_identifiers = list_intersection(identifiers_existing_all, function_names);
        let without_me = list_difference(function_name_identifiers, [function_name]);
        let missing = list_difference(without_me, imports_existing);
        let missing_imports = missing.map(m => {
            return `import { ${ m } } from './${ m }.mjs'`;
        }).join(';');
        let parsed = js_parse(missing_imports);
        list_concat_front(ast.body, parsed.body);
        let function_file_path = await function_path_find(function_name);
        await ast_imports_for_each(ast, async import_statement => {
            let imported_file_path = await function_path_find(import_statement.name);
            let relative_file_path = path.relative(function_file_path, imported_file_path);
            import_statement.source.value = './' + relative_file_path;
        });
    });
}