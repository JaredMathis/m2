import { run } from './run.mjs';
export async function vs_code_open(path_to_file) {
    await run(`code ${ path_to_file }`);
}