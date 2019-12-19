const _ = require('lodash')
const dirTree = require('directory-tree')

const getChildrenDirectories = (dirTree) => {
  const dirTreeChildren = _.get(dirTree, 'children') || []
  return _.filter(dirTreeChildren, { type: 'directory' })
}

const getChildrenFiles = (dirTree) => {
  const dirTreeChildren = _.get(dirTree, 'children') || []
  return _.filter(dirTreeChildren, { type: 'file' })
}

const getChildrenDirectory = (dirTree, name) => {
  const dirTreeChildren = _.get(dirTree, 'children') || []
  return _.find(dirTreeChildren, { type: 'directory', name })
}

const prepareClientFileConfig = (file, parentConfigName) => {
  const factoryMethodName = file.name.replace('.js', '')
  const apiPropertyName = factoryMethodName.charAt(0).toLowerCase() + factoryMethodName.slice(1)
  const apiPath = `crm.${parentConfigName}.${apiPropertyName}`

  return { factoryMethodName, apiPath }
}

const prepareConfig = (directory) => {
  const config = {}
  config.name = directory.name
  config.clientFactoryName = `${config.name}ClientFactory`
  config.clientFactoryPath = `./${directory.path}`
  config.apiClientName = `${config.name}ApiClient`
  config.basePathSufix = `/crm/v3/${config.name}`
  const apiDirectory = getChildrenDirectory(directory, 'api')
  const apiDirectoryClientFiles = getChildrenFiles(apiDirectory)
  config.apiClientFilesConfig = _.map(apiDirectoryClientFiles, _.partial(prepareClientFileConfig, _, config.name))

  return config
}

exports.getClientsConfig = () => {
  const codegenCrmDirTree = dirTree('codegen/crm', { exclude: [/model/, /ApiClient/, /index/] })
  const codegenCrmDirectories = getChildrenDirectories(codegenCrmDirTree)
  const clientsConfig = _.map(codegenCrmDirectories, prepareConfig)

  return clientsConfig
}
