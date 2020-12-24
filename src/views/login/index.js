import React, { Component } from 'react'
import { Input, Icon, Form, Button } from 'antd'
import { saveUserName } from '@/global/globalReducer'
import { connect } from 'react-redux'
import { setItem } from '@/utils'
import './index.css'

class Login extends Component {

	state = {
		submitLoading: false
	}

	handleSubmit = () => {
		this.props.form.validateFields((err, login) => {
		if (err) return
			const { userAccount, userPassword } = login
			if ( userAccount === 'admin' && userPassword === 'admin' ) {
				setItem("token", '2248708e-5a27-4dea-8670-38753009d340')
				const userName = {
					userName: userAccount
				}
				this.props.dispatch(saveUserName(userName))
				this.props.history.push('/homePage')
			}
		})
	}

	componentDidMount = () => {
		// console.log('this.props', this.props)
	}

	render() {
		const { getFieldDecorator } = this.props.form
		return (
			<>
				<div className='user-login'>
					<div className='user-login-main-form-content'>
						<h3 className="title">Login Form</h3>
						<Form autoComplete='off'>
							<Form.Item>
								{getFieldDecorator('userAccount', {
									rules: [{ required: true, message: '请输入用户名!' }],
								})(
								<Input
									prefix={<Icon type='user' />}
									placeholder='用户名'
								/>,
								)}
							</Form.Item>
							<Form.Item>
								{getFieldDecorator('userPassword', {
								rules: [{ required: true, message: '请输入密码!' }],
								})(
								<Input
									prefix={<Icon type='lock' />}
									type='password'
									placeholder='密码'
								/>,
								)}
							</Form.Item>
							<Form.Item className='user-login-main-form-btn'>
								<Button
									onClick={this.handleSubmit}
									className='user-login-main-form-submit'
									loading={this.state.submitLoading}
									disabled={this.state.submitLoading}
									size="large"
								>
								登录
								</Button>
							</Form.Item>
							<div className="pass-info">
								<p>username: admin</p>
								<p>password: admin</p>
							</div>
						</Form>
					</div>
				</div>
			</>
			
		)
	}
}

export default connect()(Form.create()(Login))