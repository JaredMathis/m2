import { js_unparse } from "./js_unparse.mjs";

export function function_ast_set(function_name, ast) {
    let code = js_unparse(ast);
}