import { log } from './log.mjs';
import { functions_all_get } from './functions/all/get.mjs';
export async function tests() {
    let f = await functions_all_get();
    console.log(f);
}