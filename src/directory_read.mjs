import recursive from 'recursive-readdir';
export async function directory_read(directory_path) {
    console.log({directory_path});
    let result = await recursive(directory_path);
    console.log({result});
    return result;
}