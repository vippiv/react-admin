import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { frontRoutes } from '@/routes/index.js'
import './index.css'
const { SubMenu } = Menu
const { Sider, Content } = Layout

class FrameWork extends React.Component {
    constructor (props) {
        super()
    }
    render () {
        return (
            <>
                <Layout>
                    <Sider theme="dark">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            >
                            {frontRoutes.map(route => {
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
                    <Content>
                        {this.props.children}
                    </Content>
                </Layout>
            </>
        )
    }
}

export default FrameWork