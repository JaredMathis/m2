import acorn from "acorn";

export async function function_ast_get(function_name) {
    let text = await file_read(function_name);
    return acorn.parse(text);
}