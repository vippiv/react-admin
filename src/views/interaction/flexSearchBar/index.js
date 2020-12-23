import React, { Component } from 'react'
import { Form, Input, Row, Col, Select, DatePicker, Button } from 'antd'
import './index.css'

class FlexSearchBar extends Component {
	render () {
		return (
			<>
				<Form layout='inline' autoComplete='off'>
					<Row>
						<Col span={6}>
							<Form.Item label='处方号' className="form-item-1">
								<Input placeholder='请输入处方号' style={{ width: '100%' }}/>
							</Form.Item>
						</Col>
						<Col span={6}>
							<Form.Item label='患者身份证号' className="form-item-2">
								<Input placeholder='请输入患者身份证号' style={{ width: '100%' }}/>
							</Form.Item>
						</Col>
						<Col span={6}>
							<Form.Item label='处方类型' className="form-item-3">
								<Select
									style={{ width: '100%' }}
									placeholder='请选择处方类型'
								>
									<Select.Option key='-1' value=''>全部</Select.Option>
								</Select>
							</Form.Item>
						</Col>
						<Col span={6}>
							<Form.Item label='审核状态' className="form-item-4">
								<Select
									style={{ width: '100%' }}
									placeholder='请选择审核状态'
									getPopupContainer={(node) => node.parentNode}
								>
									<Select.Option key='-1' value=''>全部</Select.Option>
									<Select.Option key='1' value='1'>待审核</Select.Option>
									<Select.Option key='2' value='2'>已审核</Select.Option>
								</Select>
							</Form.Item>
						</Col>
					</Row>
					<Row>
						<Col span={12}>
							<Form.Item label='处方日期' className="form-item-5">
								<Form.Item >
									<DatePicker placeholder="请选择开始时间" format='YYYY-MM-DD' style={{ width: '95%' }} />
								</Form.Item>
								<Form.Item >
									<DatePicker placeholder="请选择结束时间" format='YYYY-MM-DD' style={{ width: '100%' }} />
								</Form.Item>
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label='审核时间' className="form-item-6">
								<Form.Item >
									<DatePicker placeholder="请选择开始时间" format='YYYY-MM-DD' style={{ width: '95%' }} />
								</Form.Item>
								<Form.Item >
									<DatePicker placeholder="请选择结束时间" format='YYYY-MM-DD' style={{ width: '100%' }}
									/>
								</Form.Item>
							</Form.Item>
						</Col>
					</Row>
					<Form.Item style={{ float: 'right', marginRight: 0, marginTop: 5}}>
						<Button type='primary' icon='search'>搜索</Button>
					</Form.Item>
				</Form>
				<div style={{marginTop: '20px'}}>
					<p>页面尺寸变化，搜索布局不变</p>
				</div>
			</>
		)
	}
}

export default FlexSearchBar