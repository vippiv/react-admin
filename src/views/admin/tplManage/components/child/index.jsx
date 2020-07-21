import React from 'react'

class Child extends React.Component {
	clickGoods (e) {
		this.props.getPrice(e)
	}
	render () {
		return (
			<div>
				<h1>{this.props.price}</h1>
				<button onClick={this.clickGoods.bind(this, 30)}>goods</button>
			</div>
		)
	}
}

export default Child