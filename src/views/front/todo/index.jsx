import React from 'react'
import { Layout, Row, Col, Input, Typography } from 'antd'
import './index.css'
const { Sider, Content } = Layout
const { Title } = Typography

class Todo extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			todoInputVal: '',
			todoList: []
		}
	}
	handleKeyDown (evt) {
		if (evt.keyCode === 13) {
			const todoList = this.state.todoList
			todoList.push({
				content: evt.target.value,
				finished: false,
				timeStamp: new Date().getTime()
			})
			this.setState({
				todoList: todoList
			})
			this.handleTodoInputChange('')
		}
	}
	handleTodoInputChange (evt) {
		this.setState({
			todoInputVal: evt.target ? evt.target.value : evt
		})
	}
	handleDelThisItem (obj) {
		let todoList = this.state.todoList
		todoList = todoList.filter(item => item.timeStamp !== obj.timeStamp)
		this.setState({
			todoList: todoList
		})
	}
	render () {
		return (
			<>
				<Layout>
					<Sider></Sider>
					<Content>
						<Row>
							<Col span={24}>
								<Title level={2}>TODO List</Title>
								<Input value={this.state.todoInputVal} onChange={this.handleTodoInputChange.bind(this)} onKeyDown={this.handleKeyDown.bind(this)}/>
								<ul className="todo_style">
									{this.state.todoList.map((item, index) => {
										return <li key={item.timeStamp}>{++index}. {item.content}<span className="del" onClick={this.handleDelThisItem.bind(this, item)}>×</span></li>
									})}
								</ul>
							</Col>
						</Row>
					</Content>
				</Layout>
			</>
		)
	}
}

export default Todo