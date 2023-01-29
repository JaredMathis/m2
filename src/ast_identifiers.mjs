import { ast_filter } from './ast_filter.mjs';
import { ast_identifier_is } from './ast_identifier_is.mjs';
export function ast_identifiers(ast) {
    return ast_filter(ast, ast_identifier_is);
}


