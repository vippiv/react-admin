import React from 'react'
import { Layout, Icon, Dropdown, Menu } from 'antd'
import './index.css'

const Heade = Layout.Header

const personalMenu = (props) => {
    return (
        <Menu>
            <Menu.Item
                key = '2'
                onClick = {() => typeof props.updatePassword === 'function' && props.updatePassword()}
            >
                修改密码
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
                key = '3'
                onClick = {() => typeof props.logout === 'function' && props.logout()}
            >
                退出
            </Menu.Item>
        </Menu>
    )
}

const Header = (props) => {
    return (
        <Heade className="header">
            <Icon
                className="header-trigger"
                type = {props.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick = {() => typeof props.toggle === 'function' && props.toggle()}
            />
            <ul className="header-right">
                <li className="header-right-item">
                    <Dropdown overlay = {personalMenu(props)}>
                        <span className="ant-dropdown-link">
                            { props.userName ? `您好，${props.userName}` : ''}
                            <Icon type="caret-down" className="drop-arrow" />
                        </span>
                    </Dropdown>
                </li>
            </ul>
            <p className="header-center"><span></span></p>
        </Heade>
    )
}

export default Header