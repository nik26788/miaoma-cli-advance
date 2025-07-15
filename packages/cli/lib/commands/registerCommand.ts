import {program} from 'commander'
import type {Command} from 'commander'

type Fn = (p: Command) => Command

export function registerCommand(fn: Fn) {
   program.addCommand(fn(program))
}
