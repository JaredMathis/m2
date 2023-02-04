import { run } from './../run.mjs';
import { package_bump } from './bump.mjs';
export async function package_publish() {
    await package_bump();
    await run(`npm publish`);
}