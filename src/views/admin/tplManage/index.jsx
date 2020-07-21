import React from 'react'
import { Row, Col } from 'antd'
import Child from './components/child/index.jsx'

class TplManage extends React.Component {
	constructor () {
		super()
		this.state = {
			price: 0
		}
	}
	clickGoods (e) {
		this.setState({
			price: e
		})
	}
	getItemPrice (e) {
		this.setState({
			price: e
		})
	}
	render () {
		let { price } = this.state
		return (
			<Row>
				<Col span={24}>
					<button onClick={this.clickGoods.bind(this, 10)}>goods one</button>
					<button onClick={this.clickGoods.bind(this, 20)}>goods two</button>
					<Child price={price} getPrice={this.getItemPrice.bind(this)}/>
				</Col>
			</Row>
		)
	}
}

export default TplManage