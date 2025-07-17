import { program } from 'commander'

import './commands'

export function runCLI() {
    program.option('--first').option('-s, --separator <char>').argument('<string>')

    // // 非插件化的方式
    // program
    //     .command('info')
    //     .description('get info')
    //     .action(() => {
    //         console.log('info')
    //     })
    // // 插件化的方式
    // const createCommand = program
    //     .createCommand('create')
    //     .description('create a project')
    //     .action(() => {
    //         console.log('create')
    //     })
    // program.addCommand(createCommand)
    // // 函数式编程，柯里化来解决惰性执行

    program.parse()
}
