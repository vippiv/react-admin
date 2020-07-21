import React, {Component} from 'react'
import { Layout } from 'antd'
import SearchTree from '@/components/TreeNode/index.js'
const { Sider, Content } = Layout

class BackAdmin extends Component {
	constructor () {
		super()
		this.state = {
			text: '0-1'
		}
	}
	handleGetText (val) {
		this.setState({
			text: val
		})
	}
	render () {
		let { text } = this.state
		return (
			<Layout>
				<Sider theme="light">
					<SearchTree getText={this.handleGetText.bind(this)}></SearchTree>
				</Sider>
				<Content className="main">{text}</Content>
			</Layout>
		)
	}
}

export default BackAdmin