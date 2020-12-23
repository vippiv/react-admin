import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { BrowserRouter as Router } from 'react-router-dom'

import rootReducer from './global/reducer'
import App from './views/layout'
import './styles/base.css'

import './index.css'
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
	<ConfigProvider locale={zhCN}>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</ConfigProvider>,
	document.getElementById('root')
)