import type { Command } from 'commander'
import pc from 'picocolors'

import pkg from '../../../package.json'
import { logger } from '../../utils/logger'

export const info = (program: Command) => {
    const infoCommand = program
        .createCommand('info')
        .description('Display info about the miaoma CLI')
        .action(() => {
            logger.log(pc.bgGreen(`Product: miaoma CLI v${pkg.version}`))
            logger.log(pc.green('Author: Wangxu'))
            logger.log(pc.underline('Website: http://nikdev.cn'))
        })

    return infoCommand
}
