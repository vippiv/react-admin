import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { adminRoutes } from '../../routes/index'
import './index.css'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const routes = adminRoutes.filter(route => route.isShow)

function Frame (props) {
	return (
		<Layout>
			<Header className="header">
				<div className="logo" />
			</Header>
			<Layout>
				<Sider width={200} className="site-layout-background">
					<Menu
					mode="inline"
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					style={{ height: '100%', borderRight: 0 }}
					>
						{routes.map(route => {
							if (route.subRoutes) {
								return (
									<SubMenu key={route.path} title={route.title}>
										{
											route.subRoutes.map(sr => {
												return (<Menu.Item key={sr.path}><Link to={sr.path}>{sr.title}</Link></Menu.Item>)
											})
										}
									</SubMenu>
								)
							}
							return (
								<Menu.Item key={route.path}><Link to={route.path}>{route.title}</Link></Menu.Item>
							)
						})}
					</Menu>
				</Sider>
				<Layout style={{ padding: '0 24px 24px' }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<Content
					className="site-layout-background"
					style={{
						padding: 24,
						margin: 0,
						minHeight: 280,
					}}
					>
					{props.children}
					</Content>
				</Layout>
			</Layout>
		</Layout>
	)
}

export default Frame