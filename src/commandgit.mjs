import { git_acp } from './git/acp.mjs';
import { string_space } from './string/space.mjs';
import { command_run } from './command/run.mjs';
async function commandgit() {
    let result = await command_run();
    let {git_acp} = await import(`./git/acp.mjs`);
    git_acp(`${ result.function_name } ${ result.function_arguments.join(string_space()) }`);
}
commandgit();