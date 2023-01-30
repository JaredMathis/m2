

import * as recursive from "recursive-readdir";

export async function directory_read(directory_path) {
    return await recursive(directory_path)
}