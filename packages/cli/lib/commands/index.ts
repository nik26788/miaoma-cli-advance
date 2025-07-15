import {registerCommand} from './registerCommand'
import {info} from './base/info'
import {build} from './base/build'
import {create} from './base/create'
import {preview} from './base/preview'
import {serve} from './base/serve'

registerCommand(build)
registerCommand(info)
registerCommand(create)
registerCommand(preview)
registerCommand(serve)
