import Mock from 'mockjs'


//根据文件夹目录，自动生成modules，不用手动导入各个模块
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const value = modulesFiles(modulePath)
  modules.push(value.default)
  return modules
}, [])

modules.forEach(m => Mock.mock(new RegExp(m.url), m.type, m.fun))


