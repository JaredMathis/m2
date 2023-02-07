export function m00_init_web() {
    await m00_init();
    await run(`npm install webpack webpack-cli --save-dev`);
    await directory_create_if_not_exists('public');
    await index_new();
}