import React, { Component } from 'react'
import { Form, Button, Select, Input, Row, Spin, DatePicker } from 'antd'
import './index.css'

class ProductsAdd extends Component {
	state = {
		loading: false
	}

	handleSubmitData = () => {
		this.props.form.validateFields((err, formObj) => {
			const saveData = this.props.form.getFieldsValue()
			if (!err) {
				console.log(saveData)
			}
		})
	}

	handleBackList = () => {
		this.props.history.push('/tradeList')
	}

	render () {
		const { getFieldDecorator } = this.props.form
		return (
			<>
				<div className='product-info'>
					<Spin tip='请稍候...' spinning={this.state.loading}>
						<Form autoComplete='off' labelCol={{ span: 7 }} wrapperCol={{ span: 13 }}>
						<div className='clearfix box'>
							<div className="clearfix" style={{marginTop: 20}}>
							<Form.Item label='产品编号' className='w30'>
							{getFieldDecorator('hospitalId', {
								initialValue: ''
							})(
								<Input placeholder='请输入产品编号' />
							)}
							</Form.Item>
							<Form.Item label='产品名称' className='w30'>
							{getFieldDecorator('hosipitalName', {
								initialValue: ''
							})(
								<Input placeholder='请输入产品名称' />
							)}
							</Form.Item>
							<Form.Item label='产品别名' className='w30'>
							{getFieldDecorator('patientName', {
								initialValue: '',
								rules: [
									{ required: true, message: '请输入产品别名' },
								],
							})(
								<Input placeholder='请输入产品别名' />
							)}
							</Form.Item>
							<Form.Item label='产品高度' className='w30'>
								{getFieldDecorator('patientHeight', {
									initialValue: '',
									getValueFromEvent: e => Number(e.target.value) < 1 ? e.target.value = 1 : e.target.value
								})(
									<Input addonAfter="CM" type="number"  placeholder='请输入产品高度'/>
								)}
							</Form.Item>
							<Form.Item label='产地' className='w30'>
							{getFieldDecorator('patientSex', {
								initialValue: '',
								rules: [
								{ required: true, message: '请选择产地' },
								],
							})(
								<Select
								getPopupContainer={(node) => node.parentNode}
								placeholder = '请选择产地'
								>
								{(this.state.genderList || []).map(item => 
									<Select.Option key={item.code} value={item.code}>{item.name}</Select.Option>)
								}
								</Select>
							)}
							</Form.Item>
							<Form.Item label='有效期' className='w30'>
							{getFieldDecorator('patientAge', {
								initialValue: '',
								rules: [
								{ required: true, message: '请输入有效期' },
								{
									pattern: /^\d*$/,
									message: '年龄仅能输入整数'
								}
								],
								getValueFromEvent: e => Number(e.target.value) < 1 ? e.target.value = 1 : e.target.value
							})(
								<Input addonAfter="月" type="number" placeholder='请输入有效期'/>
							)}
							</Form.Item>
							<Form.Item label='生产日期' className='w30'>
							{getFieldDecorator('patientBirthday', {
								initialValue: null,
								rules: [
									{ required: true, message: '请选择生产日期' },
								],
							})(
								<DatePicker getCalendarContainer={triggerNode => triggerNode.parentNode} placeholder="请选择生产日期" format='YYYY-MM-DD' style={{ width: '100%' }}
								/>
							)}
							</Form.Item>
							<Form.Item label='序列号' className='w30'>
							{getFieldDecorator('patientIdentityNumber', {
								initialValue: '',
								rules: [
								{
									pattern: /^\d*$/,
									message: '序列号只能输入数字'
								}
								]
							})(
								<Input
								placeholder='请输入序列号'
								/>
							)}
							</Form.Item>
							<Form.Item label='质保人手机号' className='w30'>
							{getFieldDecorator('patientPhone', {
								initialValue: '',
								rules: [
								{
									pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
									message: '请输入正确的手机号'
								}
								]
							})(
								<Input
								placeholder='请输入手机号'
								/>
							)}
							</Form.Item>
							
							<Form.Item label='企业邮箱' className='w30'>
							{getFieldDecorator('patientMail', {
								initialValue: '',
								rules: [
								{
									pattern: /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/,
									message: '邮箱格式不正确'
								}
								]
							})(
								<Input
								placeholder='请输入企业邮箱'
								/>
							)}
							</Form.Item>
							<Form.Item label='出厂时间' className='w30'>
							{getFieldDecorator('prescriptionDate', {
								initialValue: null,
								rules: [
								{required: true, message: '请输入出厂时间'}
								]
							})(
								<DatePicker getCalendarContainer={triggerNode => triggerNode.parentNode} showTime placeholder="请选择出厂时间" format='YYYY-MM-DD HH:mm:ss' style={{ width: '100%' }}
								/>
							)}
							</Form.Item>
							<Form.Item label='支持贷款' className='w30'>
							{getFieldDecorator('feeType', {
								initialValue: '',
							})(
								<Select
								placeholder = '请选择支持贷款'
								getPopupContainer={(node) => node.parentNode}
								>
								{(this.state.payTypeList || []).map(item => 
									<Select.Option key={item.code} value={item.code}>{item.name}</Select.Option>
								)}
								</Select>
							)}
							</Form.Item>
							<Form.Item label='产品防伪码' className='w30'>
							{getFieldDecorator('patientSocialCode', {
								initialValue: '',
							})(
								<Input
								placeholder='请输入产品防伪码'
								/>
							)}
							</Form.Item>
							<Form.Item label='质检员' className='w30'>
							{getFieldDecorator('doctorId', {
								initialValue: '',
								rules: [
								{ required: true, message: '请选择质检员' },
								],
							})(
								<Select
								placeholder = '请选择质检员'
								getPopupContainer={(node) => node.parentNode}
								>
								{(this.state.prescriptionDoctorList || []).map(item => 
									<Select.Option key={item.userAccount} value={item.userAccount}>{item.userName}</Select.Option>
								)}
								</Select>
							)}
							</Form.Item>
							<Form.Item label='送检部门' className='w30'>
							{getFieldDecorator('doctorDepartmentId', {
								initialValue: '',
								rules: [
								{ required: true, message: '请选择送检部门' },
								],
							})(
								<Select
								placeholder = '请选择送检部门'
								getPopupContainer={(node) => node.parentNode}
								>
								{(this.state.doctorDemartmentList || []).map(item => 
									<Select.Option key={item.departmentCode} value={item.departmentCode}>{item.departmentName}</Select.Option>
								)}
								</Select>
							)}
							</Form.Item>
							</div>
							<Form.Item label='售后服务' labelCol={{ span: 2 }}>
							{getFieldDecorator('allergichistory', {
								initialValue: '',
							})(
								<Select
								showSearch
								mode="multiple"
								placeholder='请选择售后服务'
								filterOption={(input, option) =>
									option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
								}
								getPopupContainer={(node) => node.parentNode}
								>
								{
									(this.state.ergyHistoryList || []).map(item => {
									return (
										<Select.Option value={item.code} key={item.code}>{item.name}</Select.Option>
									)
									})
								}
								</Select>
							)}
							</Form.Item>
						</div>
						</Form>
						<Row className='drug-match-rule-btn-row text-center' style={{marginBottom: 20}}>
						<Button
							type='default'
							onClick={() => this.handleBackList()}
							style={{ width: '150px' }}
						>
							取消
						</Button>
						<Button
							type='primary'
							onClick={this.handleSubmitData}
							loading={this.state.isSubmitLoading}
							disabled={this.state.isSubmitLoading}
							style={{ marginLeft: '20px', width: '180px' }}
						>
							保存
						</Button>
						</Row>
					</Spin>
				</div>
			</>
		)
	}
}

export default Form.create()(ProductsAdd)