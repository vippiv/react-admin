import React, { Component } from 'react'
import { Form, Input, Select, Col, Checkbox, Radio, DatePicker, Button } from 'antd'
import FieldModal from './fieldModal'
import './index.css'

class DynamicForm extends Component {

	state = {
		visible: false
	}

	dataSource = [
		{
			field: 'username',
			fromType: 'input',
			value: 'zwl'
		}, {
			field: 'nationality',
			fromType: 'single-select',
			value: '1'
		}, {
			field: 'hobby',
			fromType: 'checkbox',
			value: '1'
		}, {
			field: 'gender',
			fromType: 'radio',
			value: '1'
		}, {
			field: 'birthday',
			fromType: 'datePicker',
			value: '1'
		}
	]

	renderInput = (obj) => {
		const { getFieldDecorator } = this.props.form
		return (
			<>
				<Form.Item label={obj.field || 'field'}>
					{
						getFieldDecorator(obj.field, {
							rules: [{required: true, message:`Please choose ${obj.field}`}]
						})(
							<Input placeholder="请输入" />
						)
					}
				</Form.Item>
			</>
		)
	}

	renderSelect = (obj) => {
		const { getFieldDecorator } = this.props.form
		return (
			<>
				<Form.Item label={obj.field || 'field'}>
					{
						getFieldDecorator(obj.field, {
							rules: [{required: true, message: `Please choose ${obj.field}`}]
						})(
							<Select placeholder='请选择'>
							</Select>
						)
					}
					
				</Form.Item>
			</>
		)
	}

	renderRadio = (obj) => {
		const { getFieldDecorator } = this.props.form
		return (
			<>
				<Form.Item label={obj.field || 'field'}>
					{
						getFieldDecorator(obj.field, {
							rules: [{required: true, message: `Please choose ${obj.field}`}]
						})(
							<Radio.Group>
								<Radio value={1}>male</Radio>
								<Radio value={2}>female</Radio>
								<Radio value={3}>unknown</Radio>
							</Radio.Group>
						)
					}
					
				</Form.Item>
			</>
		)
	}

	renderCheckbox = (obj) => {
		const { getFieldDecorator } = this.props.form
		return (
			<>
				<Form.Item label={obj.field || 'field'}>
					{
						getFieldDecorator(obj.field, {
							rules: [{ required: true, message: `Please choose ${obj.field}`}],
							initialValue: ['3']
						})(
							<Checkbox.Group options={obj.plainOptions || ['apple', 'juice']} />
						)
					}
				</Form.Item>
			</>
		)
	}

	renderDatePicker = (obj) => {
		const { getFieldDecorator } = this.props.form
		return (
			<>
				<Form.Item label={obj.field || 'field'}>
					{
						getFieldDecorator(obj.field, {
							rules: [{required: true, message: 'Please choose date'}]
						})(
							<DatePicker />
						)
					}
				</Form.Item>
			</>
		)
	}

	renderElement (obj) {
		switch (obj.fromType) {
			case 'input':
				return this.renderInput(obj)
			case 'single-select':
				return this.renderSelect(obj)
			case 'checkbox':
				return this.renderCheckbox(obj)
			case 'radio':
				return this.renderRadio(obj)
			case 'datePicker':
				return this.renderDatePicker(obj)
			default:
				return ''
		}
	}

	createForm = () => {
		return this.dataSource.map((item, index) => {
			let uniqueKey = Math.floor(Math.random() * 100000) + index
			return (
				<Col span={8} key={uniqueKey}>
					{ this.renderElement(item) }
				</Col>
			)
		})
	}

	handleSubmit = () => {
		this.props.form.validateFields((err, formObj) => {
			if (!err) {
				console.log('submit')
			}
		})
	}

	handleExtendData = () => {
		this.setState({
			visible: true
		})
	}

	handleCloseModal = () => {
		this.setState({
			visible: false
		})
	}

	render () {
		return (
			<div className="dynamic-from-container">
				<h2>动态表单（修改数据即可生成对应表单项）</h2>
				<Form layout="inline">
					{this.createForm()}
					<Col span={24} style={{textAlign: 'right'}}>
						<Form.Item>
							<Button type="primary" htmlType="submit" onClick={this.handleSubmit}>Submit</Button>
						</Form.Item>
						<Form.Item>
							{/* TODO 增加数据编辑窗口，用于动态增加数据(填表格的形式实现) */}
							<Button type="primary" htmlType="submit" onClick={this.handleExtendData}>Extend Data</Button>
						</Form.Item>
					</Col>
				</Form>
				<FieldModal 
					close={this.handleCloseModal}
					visible={this.state.visible}
				/>
			</div>
		)
	}
}

export default Form.create()(DynamicForm)