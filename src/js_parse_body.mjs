import { js_parse } from './js_parse.mjs';

export function js_parse_body(source_code) {
    return js_parse(source_code).body;
}
