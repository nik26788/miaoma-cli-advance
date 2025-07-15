import {Command, program} from 'commander'

export function registerCommand(command: Command) {
   program.addCommand(command)
}
