export const build = (program: Command) => {
    const buildCommand = program
        .createCommand('build')
        .description('This is build')
        .action(() => {
            console.log('build...')
        })
    return buildCommand
}
