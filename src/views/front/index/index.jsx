import React, {Component} from 'react'
import { Layout, Row, Col, Space, Button, Typography, Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
const { Sider, Content } = Layout
const { Title } = Typography

class Index extends Component {
	constructor () {
		super()
		this.state = {
			menu: (
				<Menu>
					<Menu.Item>
						<a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/"> 1st menu item </a>
					</Menu.Item>
				</Menu>
			)
		}
	}
	const 
	render () {
		return (
			<>
				<Layout>
					<Sider theme="light">Component Demo</Sider>
					<Content>
						<Row>
							<Col span={24}>
								<Space>
									<Button type="primary">button primary</Button>
									<Button type="text">button text</Button>
									<Button type="link">button link</Button>
									<Button type="primary" size="small">button link</Button>
								</Space>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<Title level={1}>h1 Antd Design</Title>
								<Title level={2}>h2 Antd Design</Title>
								<Title level={3}>h3 Antd Design</Title>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<Space>
									<Dropdown overlay={this.state.menu}>
										<a href="http://www.baidu.com" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
										 Hover me <DownOutlined />
										</a>
									</Dropdown>
								</Space>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								
							</Col>
						</Row>
					</Content>
				</Layout>
			</>
		)
	}
}

export default Index