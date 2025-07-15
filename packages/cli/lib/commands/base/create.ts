export const create = (program: Command) => {
    const createCommand = program
        .createCommand('create')
        .description('This is create')
        .action(() => {
            console.log('create...')
        })
    return createCommand
}
