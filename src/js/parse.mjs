import * as acorn from 'acorn';
export function js_parse(text) {
    return acorn.parse(text, {
        sourceType: 'module',
        ecmaVersion: '2020'
    });
}