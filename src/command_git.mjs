await import(`./command.mjs`);
let {git_acp} = await import(`./git_acp.mjs`);
git_acp(argv.slice(2));
