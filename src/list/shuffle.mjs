import { list_is } from './is.mjs';
import { arguments_assert } from './../arguments/assert.mjs';
export function list_shuffle(array) {
    arguments_assert(arguments, list_is);
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex]
        ];
    }
    return array;
}