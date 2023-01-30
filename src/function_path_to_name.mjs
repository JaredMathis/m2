import path from "path";
export function function_path_to_name(function_path) {
    return path.parse(function_path).name
}