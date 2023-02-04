import { command_run } from './command/run.mjs';
async function command_git() {
    let result = await command_run();
    let {git_acp} = await import(`./git/acp.mjs`);
    git_acp(`${ result.function_name } ${ result.function_arguments.join(' ') }`);
}
command_git();