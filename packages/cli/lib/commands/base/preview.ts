export const preview = (program: Command) => {
    const previewCommand = program
        .createCommand('preview')
        .description('This is preview')
        .action(() => {
            console.log('preview...')
        })
    return previewCommand
}
