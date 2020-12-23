import React, { Component } from 'react'
import { Layout } from 'antd'
import './index.css'

class HomePage extends Component {
    render () {
        const { Header, Content } = Layout
        return (
            <>
                <Layout className="home-page-layout">
                    <Header className="home-page-header"></Header>
                    <Content className="home-page-content"></Content>
                </Layout>
            </>
        )
    }
}

export default HomePage