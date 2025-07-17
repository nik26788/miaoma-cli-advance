import { build } from './base/build'
import { create } from './base/create'
import { info } from './base/info'
import { preview } from './base/preview'
import { serve } from './base/serve'
import { registerCommand } from './registerCommand'

registerCommand(build)
registerCommand(info)
registerCommand(create)
registerCommand(preview)
registerCommand(serve)
