import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as globalReduck from '@/global/globalReducer'
import { getItem } from '@/utils'
import logo from '@/assets/logo.png'
import './index.css'

const { Sider } = Layout
const SubMenu = Menu.SubMenu

const defaultProps = {
    selectedKeys: []
}

class SiderMenu extends Component {
    static defaultProps = {
        ...defaultProps
    }

    state = {
        openKeyList: [],
        isCollapsedBool: false
    }

    // lifecycle hook
    static getDerivedStateFromProps = (props, state) => {
        if (props.collapsed && !state.isCollapsedBool) {
            return { // 这里的返回值会影响到state，每次re-rendering时都会调用
                openKeyList: [],
                isCollapsedBool: true
            }
        }
        if (!props.collapsed) {
            return {
                isCollapsedBool: false
            }
        }
        return null // 如果传入的值对state无影响，一定要返回null
    }

    componentDidMount = () => {
        if (this._isEmpty(getItem('siderMenuList'))) {
            const siderMenuList = JSON.parse(getItem('siderMenuList'))
            this._getDefaultKeys(siderMenuList)
        } else {
            this.props.dispatch(globalReduck.globalAction({selectedKeys: ['1']}))
        }
    }

    _isEmpty = (uuid) => {
        if (typeof uuid === 'undefined' || uuid === null || uuid === '') {
            return false
        } else {
            return true
        }
    }

    onOpenChange = (openKeyList) => {
        this.setState({
            openKeyList
        })
    }

    _getDefaultKeys = (data) => {
        const pathname = window.location.pathname
        return data.map(item => {
            if (item.children) {
                if (item.link === pathname) {
                    this.props.dispatch(globalReduck.globalAction({ selectedKeys: [`${item.uuid}`]}))
                }
                this._getDefaultKeys(item.children)
            }
            if (item.link === pathname) {
                this.props.dispatch(globalReduck.globalAction({ selectedKeys: [`${item.uuid}`]}))
            }
            return ''
        })
    }

    // 递归路由
    menu = (data) => {
        if (!data) {
            return
        }
        return data.map(item => {
            if (item.children) {
                localStorage.setItem('defaultMenu', item.children.uuid)
                let sub = (
                    <SubMenu
                        key = {item.uuid}
                        link = {item.link}
                        title = {
                            <span>
                                {item.icon && <Icon type = {item.icon} />}
                                <span>{item.title}</span>  
                            </span>
                        }
                    >
                        { this.menu(item.children) }
                    </SubMenu>
                )
                return sub
            }
            localStorage.setItem('defaultMenu', item.uuid)
            let children = (
                <Menu.Item key={item.uuid} link={item.link}>
                    <span>
                        { item.icon && <Icon type={item.icon} />}
                        <span>{item.title}</span>
                    </span>
                </Menu.Item>
            )
            return children
        })
    }

    _onClick = ({item, key, keyPath, domEvent}) => {
        localStorage.setItem('defaultMenu', keyPath)
        this.props.dispatch(globalReduck.globalAction({ selectedKeys: [`${key}`]}))
        if (item.props.link) {
            this.props.history.push(item.props.link)
        }
    }

    render () {
        const selectedKeys = this.props.selectedKeys.length > 0 ? this.props.selectedKeys : ['1']
        return (
            <Sider
                trigger = {null}
                collapsible
                collapsed = { this.props.collapsed }
                className="sider-menu"
            >
                <div className="sider-menu-logo">
                    <img className="sider-menu-name" src={logo} style={{width: '175px', paddingLeft: '18px', boxSizing: 'border-box'}} alt=""/>
                </div>
                <Menu
                    mode = "inline"
                    onClick = { this._onClick}
                    selectedKeys = {selectedKeys}
                    openKeys = { this.state.openKeyList }
                    onOpenChange = { this.onOpenChange }
                >
                    { this.menu(this.props.siderMenu) }
                </Menu>
            </Sider>
        ) 
    }
}

const mapStateToProps = state => ({
    selectedKeys: state.global.selectedKeys
})

export default connect(mapStateToProps)(withRouter(SiderMenu))