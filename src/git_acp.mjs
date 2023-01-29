import {run} from './run.mjs'

await run('git add *');
try {
    await run('git commit -m "' + new Date() + "\"");
    await run('git push');
} catch (e) {
    console.log('Maybe there was nothing to commit');
}