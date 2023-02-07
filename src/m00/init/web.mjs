import { m00_init } from './../init.mjs';
import { run } from './../../run.mjs';
import { directory_create_if_not_exists } from './../../directory/create/if/not/exists.mjs';
import { index_new } from './../../index/new.mjs';
import { arguments_assert } from './../../arguments/assert.mjs';
import { string_is } from './../../string/is.mjs';
export async function m00_init_web(prefix) {
    arguments_assert(arguments, string_is);
    await m00_init();
    await run(`npm install webpack webpack-cli --save-dev`);
    await directory_create_if_not_exists('public');
    await index_new();
}