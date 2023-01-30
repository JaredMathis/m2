import { run } from './run.mjs';
import { log } from './log.mjs';
export async function git_acp(message) {
    if (!message) {
        message = new Date();
    }
    await run('git add *');
    try {
        await run('git commit -m "' + message + '"');
        await run('git push');
    } catch (e) {
        log('Git commit/push errored. Maybe there was nothing to commit');
    }
}