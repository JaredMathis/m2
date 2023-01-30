import escodegen from 'escodegen';
export function js_unparse(ast) {
    escodegen.generate(ast);
}