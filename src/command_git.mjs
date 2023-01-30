import { command_run } from "./command_run.mjs";

async function command_git() {
    await command_run();
    let {git_acp} = await import(`./git_acp.mjs`);
    git_acp(process.argv.slice(2));
}
command_git();