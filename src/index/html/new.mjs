import { file_write } from './../../file/write.mjs';
export async function index_html_new() {
    await file_write(`dist/index.html`, `
<html>
    <head></head>
    <body>
        <script type="module" src="main.js"></script>
    </body>
</html>
`);
}