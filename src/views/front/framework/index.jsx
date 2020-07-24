import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'
import { frontRoutes } from '@/routes'
import FrameWork from '@/components/FrontFrame/index.jsx'

function FrontApp() {
	return (
		<FrameWork>
			<Switch>
				{frontRoutes.map(route => {
					return <Route key={route.path} {...route}/>
				})}
				<Redirect to="/404" />
			</Switch>
		</FrameWork>
	);
}

export default FrontApp
