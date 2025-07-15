export const serve = (program: Command) => {
    const serveCommand = program
        .createCommand('serve')
        .description('This is serve')
        .action(() => {
            console.log('serve...')
        })
    return serveCommand
}
