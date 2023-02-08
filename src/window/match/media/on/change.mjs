import { function_is } from './../../../../function/is.mjs';
import { arguments_assert } from './../../../../arguments/assert.mjs';
import { string_is } from './../../../../string/is.mjs';
export function window_match_media_on_change(media_query, on_change) {
    arguments_assert(arguments, string_is, function_is);
    const mq = window.matchMedia(media_query);
    mq.addEventListener('change', e => on_change(e.matches));
    on_change(mq.matches)
}