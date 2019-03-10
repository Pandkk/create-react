const {
  override,
  addLessLoader,
  addDecoratorsLegacy,
  disableEsLint,
  useBabelRc,
  addWebpackAlias
} = require('customize-cra')
const path = require('path')

module.exports = override(
  //添加修饰器 根目录下创建.babelrc
  useBabelRc(),
  //禁用默认eslint，使用自定义eslint,根目录下创建.eslintrc.js
  disableEsLint(),
  //在传统模式下添加装饰器。一定要@babel/plugin-proposal-decorators安装
  addDecoratorsLegacy(),
  //添加less-loader配置
  addLessLoader(),
  //配置简化路径
  addWebpackAlias(
    {
      '@style': path.resolve(__dirname, 'src/style'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@resource': path.resolve(__dirname, 'src/resource'),
      '@components':path.resolve(__dirname, 'src/components'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  )
)