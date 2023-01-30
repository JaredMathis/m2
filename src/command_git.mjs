async function command_git() {
    await import(`./command.mjs`);
    let {git_acp} = await import(`./git_acp.mjs`);
    git_acp(process.argv.slice(2));
}
command_git();