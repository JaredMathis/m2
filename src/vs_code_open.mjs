import {run} from './run.mjs';

export function vs_code_open(path_to_file) {
    run(`code ${path_to_file}`);
}