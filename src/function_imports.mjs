import { ast_imports } from './ast_imports.mjs';
import {function_ast_get} from './function_ast_get.mjs';
import {log} from './log.mjs';
export async function function_imports(function_name) {
    let ast = await function_ast_get(function_name);
    let imports_existing = ast_imports(ast);
    let identifiers_existing = ast_identifiers(ast);
    log(identifiers_existing);
}