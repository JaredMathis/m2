import fs from 'fs';
import { arguments_assert } from './arguments_assert.mjs';
import { string_is } from './string_is.mjs';
export async function directory_new(directory_path) {
    arguments_assert(arguments, string_is);
    await fs.promises.mkdir(directory_path);
}