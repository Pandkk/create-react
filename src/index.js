

import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import * as serviceWorker from './serviceWorker'
import {
  HashRouter as Router,
} from 'react-router-dom'
import { Provider as StoreProvider } from '@components/store'
import '@style/index.js'

// 全局store初始值
const store = {}

ReactDOM.render(
  <StoreProvider store={store}>
    <LocaleProvider locale={zh_CN}>
      <Router>
        {Routes}
      </Router>
    </LocaleProvider>
  </StoreProvider>
  ,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()