import { list_is } from './list_is.mjs';
import { visit } from './visit.mjs';

export function ast_visit(ast, each) {
    visit(ast,
        node => list_is(node) || node.type,
        each);
}
