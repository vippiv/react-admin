import React, { Component } from 'react'
import { Modal, Form, Input, Select } from 'antd'
import { generateRnd } from '@/utils/untils'

class FieldModal extends Component {

	state = {
		selectOptionsVisible: false,
		selectOptions: [],
		checkOptionsVisible: false,
		checkOptions: [],
		radioOptionsVisible: false,
		radioOptions: []
	}

	handleSptInputChange = (evt) => {
		console.log(this.props.form.getFieldsValue())
		const selectOptions = this.state.selectOptions, len = selectOptions.length
		if (this.state.selectOptions.length === 1) {
			selectOptions.push({ rnd: generateRnd() })
			this.setState({
				selectOptions
			})
		} else {
			if (this.props.form.getFieldProps(`selectOptions${len-1}`).value) {
				selectOptions.push({ field: 'aa', rnd: generateRnd() })
				this.setState({
					selectOptions
				})
			}
		}
	}

	handleFieleTypeSelect = (val) => {
		switch(val) {
			case 'select':
				this.setState({
					selectOptionsVisible: true,
					selectOptions: [{ field: 'aa', rnd: generateRnd() }],
					checkOptionsVisible: false,
					radioOptionsVisible: false
				})
				break
			case 'checkbox':
				this.setState({
					checkOptionsVisible: true,
					checkOptions: ['1'],
					selectOptionsVisible: false,
					radioOptionsVisible: false
				})
				break
			case 'radio':
				this.setState({
					radioOptionsVisible: true,
					radioOptions: ['1'],
					selectOptionsVisible: false,
					checkOptionsVisible: false
				})
				break
			default:
				break
		}
	}

	handleOk = () => {
		this.props.form.validateFields((err, formObj) => {
			if (!err) {
				console.log(formObj)
			}
		})
	}

	handleCancel = () => {
		this.props.close()
	}

	renderUnlimitedQualitySpt = () => {
		const { getFieldDecorator } = this.props.form
		return (
			<>
				<Form.Item label="select options">
					{
						this.state.selectOptions.map((item, index) => {
							return (
								<div key={item.rnd}>
									{
										getFieldDecorator(`${item.field}`, {})(
											<Input placeholder="请输入" onInput={(e) => this.handleSptInputChange(e)} />
										)
									}
								</div>
							)
						})
					}
				</Form.Item>
			</>
		)
	}

	render () {
		const { getFieldDecorator } = this.props.form
		return (
			<>
				<Modal
					title="Extend Field"
					maskClosable={false}
					visible={this.props.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					>
					<Form>
						<Form.Item label="field name">
							{
								getFieldDecorator('fieldName', {
									rules: [ {required: true, message: '请输入字段名'} ]
								})(
									<Input placeholder="请输入" />
								)
							}
						</Form.Item>
						<Form.Item label="field type">
							{
								getFieldDecorator('fieldType', {
									rules: [ {required: true, message: '请选择'} ]
								})(
									<Select placeholder='请选择' onChange={(val) => this.handleFieleTypeSelect(val)}>
										<Select.Option value="input">input</Select.Option>
										<Select.Option value="select">select</Select.Option>
										<Select.Option value="checkbox">checkbox</Select.Option>
										<Select.Option value="radio">radio</Select.Option>
										<Select.Option value="date">date</Select.Option>
									</Select>
								)
							}
						</Form.Item>
						{ this.state.selectOptionsVisible ? this.renderUnlimitedQualitySpt() : '' }
						<Form.Item label="checkbox options">
							{
								getFieldDecorator('checkOptions', {
									rules: [ {required: true, message: '请输入'} ]
								})(
									<Input placeholder="请输入" />
								)
							}
						</Form.Item>
						<Form.Item label="radio options">
							{
								getFieldDecorator('radioOptions', {
									rules: [ {required: true, message: '请输入'} ]
								})(
									<Input placeholder="请输入" />
								)
							}
						</Form.Item>
					</Form>
				</Modal>
			</>
		)
	}
}

export default Form.create()(FieldModal)

// http://ismaelga.github.io/react-json-editor/