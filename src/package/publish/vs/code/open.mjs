import { arguments_assert } from "../../../../arguments/assert.mjs";
import { list_is } from "../../../../list/is.mjs";

export async function package_publish_vs_code_open(path_to_directory) {
    arguments_assert(arguments, list_is);
    await package_publish();
    await vs_code_open(path_to_directory);
}