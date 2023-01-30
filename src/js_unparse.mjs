import escodegen from 'escodegen';
export function js_unparse(ast) {
    return escodegen.generate(ast);
}