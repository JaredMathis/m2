import { list_remove_all } from './../list/remove/all.mjs';
import { ast_identifiers } from './../ast/identifiers.mjs';
import { ast_imports } from './../ast/imports.mjs';
import { list_intersection } from './../list/intersection.mjs';
import { list_difference } from './../list/difference.mjs';
import { function_ast_transform } from './ast/transform.mjs';
import { js_parse } from './../js/parse.mjs';
import { list_concat_front } from './../list/concat/front.mjs';
import { for_each } from './../for/each.mjs';
import { list_add } from './../list/add.mjs';
import { ast_imports_for_each } from './../ast/imports/for/each.mjs';
import { keys } from './../keys.mjs';
import { functions_all_get } from './../functions/all/get.mjs';
import path from 'path';
import { function_path_find } from './path/find.mjs';
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
        list_remove_all(ast.body, removals);
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
            import_statement.node.source.value = relative_file_path.substring(1).replaceAll('\\', '/');
        });
    });
}