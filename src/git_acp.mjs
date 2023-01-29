import {run} from './run.mjs'

let add_result = await run('git add *');
console.log(add_result)
await run('git commit -m "' + new Date() + "\"");
await run('git push');