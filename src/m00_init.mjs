import { gitignore_node_modules } from './gitignore_node_modules.mjs';
export async function m00_init() {
    await gitignore_node_modules();
}