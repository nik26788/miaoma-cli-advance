import type { Command } from 'commander'

import { loadTemplate } from '../../utils/loadTemplate'

type CreateCommandOptions = {
    framework?: string
    template?: string
    remote?: boolean
}

export const create = (program: Command) => {
    const createCommand = program
        .createCommand('create')
        .arguments('<projectName>')
        .option('-f, --framework <framework>', 'Select a project type')
        .option('-t, --template <template>', 'Select a project template')
        .option('-r, --remote <remote>', 'Remote template')
        .description('Create a project')
        .action(async (projectName, options: CreateCommandOptions) => {
            const { template, remote } = options
            // console.log(projectName)
            // console.log(options)
            // console.log('is remote? ', remote)

            if (remote) {
                loadTemplate({ projectName, template, remote })
                return
            }

            loadTemplate({ projectName, template })
        })
    return createCommand
}
