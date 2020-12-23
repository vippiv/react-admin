import React, { createElement } from 'react'
import { Button } from 'antd'
import config from './config'
import routePaths from '@/router/routePath'
import './index.css'

class NoMatch extends React.PureComponent {
	static defaultProps = {
		backText: '返回首页',
		redirect: routePaths.home
	}

	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const {
			backText,
			linkElement = 'a',
			title,
			desc,
			img,
			actions,
			redirect,
			location
		} = this.props

		const pageType = location.pathname.includes('500Error') ? '500' : '404'
			return (
				<div className='exception'>
					<div className='imgBlock'>
						<div
							className='imgEle'
							style={{ backgroundImage: `url(${img || config[pageType].img})`, backgroundSize: '100% 100%' }}
						/>
					</div>
					<div className='content'>
						<h1 className='no-match-title'>{title || config[pageType].title}</h1>
						<div className='desc'>{desc || config[pageType].desc}</div>
						<div className='actions'>
							{actions ||
								createElement(
									linkElement,
									{
										to: redirect,
										href: redirect,
									},
									<Button type='primary'>{backText}</Button>
								)}
						</div>
					</div>
				</div>
			)
		}
	}

export default NoMatch
