import { package_transform } from "./package_transform.mjs";

export async function package_scripts() {
    await package_transform(p => {
        if (!p.scripts) {
            p.scripts = {};
        }
    })
}