import React, { Component } from 'react'
import { Form, Button, Row, Col, Divider, Table } from 'antd'
import { Link } from 'react-router-dom'
import routePaths from '@/router/routePath'
import { PAG_CONFIG } from '@/global/globalConfig'

class TradeList extends Component {
	state = {
		selectedRowKeys: []
	}

	columns = [
		{
			title: '流水号',
			dataIndex: 'saleNumber',
			key: 'saleNumber',
			render: (text, record) => {
				return (
					<div>{text}</div>
				)
			}
		},
		{
			title: '产品类型',
			dataIndex: 'productType',
			key: 'productType'
		},
		{
			title: '订单日期',
			dataIndex: 'orderTime',
			key: 'orderTime'
		},
		{
			title: '消费者',
			dataIndex: 'buyer',
			key: 'buyer'
		},
		{
			title: '性别',
			dataIndex: 'gender',
			key: 'gender'
		},
		{
			title: '出售日期',
			dataIndex: 'saleDate',
			key: 'saleDate'
		},
		{
			title: '消费者手机号',
			dataIndex: 'buyerPhone',
			key: 'buyerPhone'
		},
		{
			title: '操作',
			dataIndex: '',
			key: 'action',
			render: (text, record) => {
				return (
					<div className='operator-btn'>
						{
							record.status === 1 ?
								<span className='table-link'>
									<span onClick={() => this._handleExamine(record)}>审核</span>
									<Divider type='vertical' />
									<Link to={`${routePaths.productsAdd}`}>编辑</Link>
								</span>
							:
								<span>查看结果</span>
						}
						<Divider type='vertical' />
						<Link to={`${routePaths.productsAdd}`}>查看详情</Link>
					</div>
				)
			}
		}
	]

	dataSource = [
		{
			saleNumber: '3202020012514545',
			productType: '电子',
			orderTime: '2020-2-1',
			buyer: 'zwl',
			gender: '男',
			saleDate: '2020-2-1',
			buyerPhone: '13254154141'
		}, {
			saleNumber: '3202020012514545',
			productType: '生鲜',
			orderTime: '2020-2-1',
			buyer: 'zy',
			gender: '女',
			saleDate: '2020-2-1',
			buyerPhone: '13254154141'
		}
	]

	handleAddPro = () => {
		this.props.history.push('/tradeList/add')
	}

	handleExpandTable = () => {
		console.log('expand')
	}

	render () {
		const rowSelection = {
			selectedRowKeys: this.state.selectedRowKeys,
			onChange: this.onSelectChange,
		}
		return (
			<>
				<Row>
					<Col span={24}>
						<Button type="primary" onClick={() => this.handleAddPro()}>新增产品</Button>
					</Col>
				</Row>
				<Table
					rowKey='id'
					bordered
					columns={this.columns}
					dataSource={this.dataSource}
					rowClassName={record => {
					let lineHeightTr = record.prescriptionUuid === this.state.currntPreUuid ? `table-tr-color line-height-tr` : 'table-tr-color'
					return lineHeightTr
					}}
					pagination={{
					...PAG_CONFIG,
					pageSize: this.props.pageSize,
					total: this.props.total,
					current: this.props.current
					}}
					expandedRowRender={record => this.handleExpandTable(record)}
					expandRowByClick
					rowSelection={rowSelection}
					loading={this.state.tableLoading}
					onChange={this._handleOnchange}
					scroll={{ y: this.props.clientHeight - 200 }}
					className='table'
				/>
			</>
		)
	}
}

export default Form.create()(TradeList)