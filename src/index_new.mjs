import { file_write } from './file_write.mjs';
export async function index_new() {
    await file_write(`public/index.html`, `
<html>
    <head></head>
    <body>
        <script type="module" src="index.mjs"></script>
    </body>
</html>
`);
}