import {run} from './run.mjs';
import {log} from './log.mjs';

await run('git add *');
try {
    await run('git commit -m "' + new Date() + "\"");
    await run('git push');
} catch (e) {
    log('Git commit/push errored. Maybe there was nothing to commit');
}