import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'
import { adminRoutes, subRoutes } from './routes'
import Frame from './components/BackFrame/index.jsx'

function App() {
	return (
		<Frame>
			<Switch>
				{adminRoutes.map(route => {
					return <Route key={route.path} {...route}/>
				})}
				{subRoutes.map(route => {
					return <Route key={route.path} {...route}/>
				})}
				<Redirect to="/404" />
			</Switch>
		</Frame>
	);
}

export default App
