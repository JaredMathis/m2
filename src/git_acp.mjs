import {run} from './run.mjs'

await run('git add *');
try {
    await run('git commit -m "' + new Date() + "\"");
    await run('git push');
} catch (e) {
    console.log('Git commit/push errored. Maybe there was nothing to commit');
}