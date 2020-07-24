import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './index.css';
import { mainRoutes } from './routes/index';
import App from './App.jsx'
import FrontApp from '@/views/front/framework/index.jsx'
import 'antd/dist/antd.css'

// ReactDOM.render(
// 	<Router>
// 		<Switch>
// 			<Route path="/admin" render={routeProps => <App {...routeProps} />} />
// 			{mainRoutes.map(route => {
// 				return <Route key={route.path} {...route }/>
// 			})}
// 			<Redirect to="/404" />
// 		</Switch>
// 	</Router>,
//   document.getElementById('root')
// );

const renderRoute = () => (
	<Router>
		<Switch>
			<Route path="/admin" render={routeProps => <App {...routeProps} />} />
			<Route path="/" render={routeProps => <FrontApp {...routeProps} />} />
			{mainRoutes.map(route => {
				return <Route key={route.path} {...route }/>
			})}
			<Redirect to="/404" />
		</Switch>
	</Router>
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

export default renderRoute