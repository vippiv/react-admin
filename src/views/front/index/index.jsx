import React, {Component} from 'react'
import { 
	Layout, 
	Row, Col, Space, 
	Button, Typography, 
	Menu, Dropdown, Pagination, 
	Checkbox, Cascader, DatePicker, 
	Form, Input, Radio, Select, TimePicker, 
	Tabs,
	Table,
	notification, message,
	Skeleton
} from 'antd'
import { DownOutlined } from '@ant-design/icons'
const { Sider, Content } = Layout
const { Title } = Typography
const { RangePicker } = DatePicker
const { Option } = Select
const { TabPane } = Tabs

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
			),
			plainOptions: ['Apple', "beer", "banana"],
			cascaderOptions: [{
				label: '江苏省',
				value: 'JiangSu',
				children: [
					{
						label: '苏州',
						value: 'SuZhou',
						children: [
							{
								label: '吴中',
								value: 'WuZhong'
							}
						]
					}
				]
			}, {
				label: '浙江省',
				value: 'ZheJiang',
				children: [
					{
						label: '杭州',
						value: 'HangZhou',
						children: [
							{
								label: '西湖',
								value: 'XiHu'
							}
						]
					}
				]
			}],
			radioOptions: [{
				label: 'A',
				value: 'A'
			}, {
				label: 'B',
				value: 'B'
			}, {
				label: 'C',
				value: 'C'
			}],
			selectOptions: [{
				label: 'A',
				value: 'A'
			}, {
				label: 'B',
				value: 'B'
			}, {
				label: 'C',
				value: 'C'
			}],
			dataSource: [
				{
					key: '1',
					name: '胡彦斌',
					age: 32,
					address: '西湖区湖底公园1号'
				},
				{
					key: '2',
					name: '胡彦祖',
					age: 42,
					address: '西湖区湖底公园1号'
				},
			],
			columns: [
				{
					title: '姓名',
					dataIndex: 'name',
					key: 'name',
				},
				{
					title: '年龄',
					dataIndex: 'age',
					key: 'age',
				},
				{
					title: '住址',
					dataIndex: 'address',
					key: 'address',
				}
			]
		}
	}
	onChange (checkedValues) {
		console.log('checkedValues', checkedValues)
	}
	openNotification () {
		notification.open({
			message: 'Notification title',
			description: 'This is the content of the notification',
			onClick () {
				alert('close the notification')
			}
		})
	}
	normalMessage () {
		message.success('this is a success message')
	}
	errorMessage () {
		message.error('this is a error message')
	}
	warnMessage () {
		message.warning('this is a warning message')
	}
	render () {
		return (
			<>
				<Layout>
					<Sider theme="dark">Component Demo</Sider>
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
								<Pagination defaultCurrent={1} total={50}></Pagination>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<Checkbox>Checkbox</Checkbox>
								<Checkbox.Group options={this.state.plainOptions} defaultValue={['Apple']} onChange={this.onChange}></Checkbox.Group>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<Cascader options={this.state.cascaderOptions} onChange={this.onChange}/>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<Space>
									<DatePicker />
									<RangePicker />
									<TimePicker />
								</Space>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<Form>
									<Form.Item label="Username" name="Username">
										<Input />
									</Form.Item>
									<Form.Item label="Password" name="Password">
										<Input />
									</Form.Item>
								</Form>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<Radio.Group onChange={this.onChange}>
									{this.state.radioOptions.map(item => {
										return <Radio value={item.value}>{item.label}</Radio>
									})}
								</Radio.Group>
							</Col>
						</Row>
						<Row>
							<Col>
								<Select defaultValue="A">
									{this.state.selectOptions.map(item => {
										return <Option value={item.value}>{item.label}</Option>
									})}
								</Select>
							</Col>
						</Row>
						<Row>
							<Col>
								<Tabs defaultActiveKey="1" onChange={this.onChange}>
									<TabPane tab="Tab 1" key="1">
										Content of Tab Pane 1
									</TabPane>
									<TabPane tab="Tab 2" key="2">
										Content of Tab Pane 2
									</TabPane>
									<TabPane tab="Tab 3" key="3">
										Content of Tab Pane 3
									</TabPane>
								</Tabs>
							</Col>
						</Row>
						<Row>
							<Col>
								<Table dataSource={this.state.dataSource} columns={this.state.columns} />
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<Space>
									<Button type="primary" onClick={this.openNotification}>open notification</Button>
									<Button type="primary" onClick={this.normalMessage}>message</Button>
									<Button type="primary" onClick={this.errorMessage}>error</Button>
									<Button type="primary" onClick={this.warnMessage}>warning</Button>
								</Space>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<h2>Skeleton</h2>
								<Skeleton active/>
							</Col>
						</Row>
					</Content>
				</Layout>
			</>
		)
	}
}

export default Index