export async function file_js_folderize_imports(file_path, output_path) {
    await file_js_folderize(file_path, output_path);
    await file_rename(file_path, function_path_new);
    await functions_all_for_each(fn => function_imports(fn));
}