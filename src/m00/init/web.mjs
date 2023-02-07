import { index_js_new } from './../../index/js/new.mjs';
import { function_auto } from './../../function/auto.mjs';
import { index_html_new } from './../../index/html/new.mjs';
import { m00_init } from './../init.mjs';
import { run } from './../../run.mjs';
import { directory_create_if_not_exists } from './../../directory/create/if/not/exists.mjs';
export async function m00_init_web() {
    await m00_init();
    await run(`npm install webpack webpack-cli --save-dev`);
    await directory_create_if_not_exists('public');
    await index_html_new();
    await index_js_new();
    await function_auto('main');
    await run(`npx webpack --mode development`);
}