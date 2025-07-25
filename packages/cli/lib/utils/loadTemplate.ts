import { copy, exists, readJson, removeSync, writeJson } from 'fs-extra'
// import { downloadTemplate } from 'giget'
import gitclone from 'git-clone'
import ora from 'ora'
import path from 'path'
import prompts from 'prompts'

export type LoadLocalTemplateOptions = {
    projectName: string
    template: string
}

export type LoadRemoteTemplateOptions = {
    projectName: string
}

export type LoadTemplateOptions = {
    remote?: boolean
} & LoadLocalTemplateOptions &
    LoadRemoteTemplateOptions

async function generatePackageJson(projectName: string) {
    const templatePath = `${process.cwd()}/${projectName}`
    const pkgPath = path.join(templatePath, 'package.json')
    const originalPkg = await readJson(pkgPath)

    await writeJson(
        pkgPath,
        {
            ...originalPkg,
            name: projectName,
            version: '1.0.0'
        },
        {
            spaces: 4
        }
    )
}

async function loadLocalTemplate(options: LoadLocalTemplateOptions) {
    const spinner = ora({
        text: 'copying the template...',
        color: 'green'
    }).start()

    // setTimeout(() => {
    //     spinner.stop()
    // }, 1000)
    const templatePath = path.join(__dirname, `../templates/${options.template}`)
    const targetPath = path.join(`${process.cwd()}/${options.projectName}`)
    // console.log(templatePath)
    // console.log(targetPath)

    const isExist = await exists(targetPath)

    if (isExist) {
        spinner.text = 'The target project name is existed, do you want to override it?'
        spinner.color = 'yellow'
        const isOverride = prompts({
            type: 'toggle',
            name: 'value',
            initial: false,
            message: 'Override it?'
        })

        if (isOverride) {
            // remove the previous files
            removeSync(targetPath)
        }
    }

    await copy(templatePath, targetPath)

    await generatePackageJson(options.projectName)

    spinner.succeed('Successfully copied template')
}

async function loadRemoteTemplate(options: LoadRemoteTemplateOptions) {
    const spinner = ora({
        text: 'copying the remote template...',
        color: 'green'
    }).start()

    // const { dir } = await downloadTemplate('https://github.com/nik26788/create-template-cli/archive/refs/heads/master.zip', {
    //     dir: `${process.cwd()}/.miaomaptemp/${options.projectName}`
    // })

    const repo = 'https://github.com/nik26788/create-template-cli.git'

    await gitclone(repo, options.projectName, {}, err => {
        if (err) {
            console.log(err)
            spinner.fail('Copy failed')
        } else {
            spinner.succeed(`Project ${options.projectName} created successfully!`)
        }
    })
}

export const loadTemplate = async (options: LoadTemplateOptions) => {
    const { projectName, template, remote } = options
    // console.log('remote', remote)

    if (remote) {
        await loadRemoteTemplate({ projectName })
        return
    }

    await loadLocalTemplate({ projectName, template })
}
