export const info = (program: Command) => {
    const infoCommand = program
        .createCommand('info')
        .description('Display info about the miaoma CLI')
        .action(() => {
            console.log('info...')
            // logger.log(pc.bgGreen(`Product: miaoma CLI v${pkg.version}`))
            // logger.log(pc.green('Author: Heyi'))
            // logger.log(pc.underline('Website: https://www.miaomaedu.com'))
        })

    return infoCommand
}
