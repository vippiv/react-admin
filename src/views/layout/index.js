import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { message, Modal, Form } from 'antd'
import { setItem, getItem, removeItem, debounce } from '@/utils'
import * as globalReducer from '@/global/globalReducer'
import * as reducer from './reducer'
import SiderMenu from './sider'
import Header from './header'
import Footer from './footer'
import BreadcrumbCom from './breadcrumb'
import Login from '../login'
import NoMatch from '../noMatch'
import routePaths from '@/router/routePath'
import routes from '@/router'
import siderRoutes from '@/router/siderRoute'
import './app.css'


const routeWithSubRoutes = (routeList, clientHeight) => {
    return routeList.map((route, index) => {
        return (
            <Route
                key = {route.path}
                path = {route.path}
                exact = {route.exact}
                render = {
                    props => {
                        return !getItem('token') ? (<Redirect push to={routePaths.login} />) : <route.component {...props} route={route} clientHeight={clientHeight}/>
                    }
                }
            ></Route>
        )
    })
}

const ContentComponent = (props) => {
    return (
        <Switch>
            <Route 
                path = {routePaths.login}
                component = {Login}
                exact = {true}
            />
            {routeWithSubRoutes(props.routeList, props.clientHeight)}
            <Route 
                render = {
                    (props) => {
                        return !getItem('token') ? (
                            <Redirect
                                push
                                to = {routePaths.login}
                            />
                        ) : <NoMatch {...props} />
                    }
                }
            />
        </Switch>
    )
}

const defaultProps = {
    isAuth: false,
    userName: '',
    token: '',
    clientHeight: 0,
    siderMenuList: siderRoutes
}

class App extends Component {
    static defaultProps = { ...defaultProps }
    
    state = {
        collapsedBool: false,
        isShowModal: false,
        cofirmLoading: false
    }
    
    componentDidMount = () => {
        this.getWindowSize()
        window.addEventListener('resize', debounce(this.getWindowSize, 200), false)
        this._appInit()
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', debounce(this.getWindowSize, 200), false)
    }

    getWindowSize = () => {
        const windowSize = {
            clientHeight: document.body.clientHeight || document.documentElement.clientHeight
        }
        this.props.dispatch(globalReducer.globalAction(windowSize))
    }

    _appInit = () => {
        const siderMenuList = this.props.siderMenuList
        setItem('siderMenuList', JSON.stringify(siderMenuList))
        const loginInit = {
            token: getItem('token'),
            userName: getItem('username'),
            isAuth: !!getItem('token'),
            siderMenuList: siderMenuList || []
        }
        this.props.dispatch(globalReducer.globalAction(loginInit))
    }

    toggle = () => {
        const collapsed = {
            collapsedBool: !this.state.collapsedBool
        }
        this.setState(collapsed)
    }

    _updatePassword = () => {
        this.setState({
            isShowModal: true
        })
    }

    _handleOkPassword = () => {
        const { form } = this.props
        form.validateFields((err, fieldvalue) => {
            if (err) return
            let arg = { ...fieldvalue }
            const isPassFit = this.passFit(arg) // 检查两次密码输入是否一致
            if (isPassFit && arg.newPassword.length > 5 && arg.repeatNewPassword.length > 5) {
                arg['uuid'] = getItem('token')
                delete arg.repeatNewPassword
                this._updatePasswordSubmit(arg)
            }
            if (!isPassFit) {
                message.error('password and repeat password are not same, please reinput')
                return
            }
            if (arg.newPassword.length < 6 || arg.repeatNewPassword.length < 6) {
                message.error('password length at least 6')
                return
            }
        })
    }

    _passFit = (arg) => {
        if (arg.newPassword === arg.repeatNewPassword) {
            return true
        } else {
            return false
        }
    }

    _updatePasswordSubmit = async (arg) => {
        this.setState({
            confirmLoading: true
        })
        const res = await this.props.dispath(reducer.updatePasswordThunk(arg))
        this.setState({
            cofirmLoading: false
        })
        if (res.success) {
            message.success(res.errorMessage)
            this.setState({
                isShowModal: false
            })
            this._handleCancelPassword() // clear password and repeat password input
            return
        }
        message.error(res.errorMessage)
    }

    _handleCancelPassword = () => { // clear password and repeat password input
        this.props.form.resetFields()
        this.setState({
            isShowModal: false
        })
    }

    _logout = () => {
        removeItem('token')
        removeItem("userName")
        removeItem('siderMenuList')
        this.props.history.push(routePaths.login)
    }

    _filterRoute = (siderMenuList = []) => {
        const { menuPathList, opEnum } = this._getMenuPath(siderMenuList)
        const pathList = [routePaths.home, ...menuPathList] // pathList中缺少添加的路由
        const newAllRoutes = routes.filter(item => {
            return pathList.includes(item.key)
        })
        const routeList = this._filterUndefinedRoute(newAllRoutes)
        return { newAllRoutes, routeList, opEnum }
    }

    _filterUndefinedRoute = (routerList) => {
        return routerList.filter(item => item.component !== undefined)
    }

    _getMenuPath = (siderMenuList = []) => {
        const sMenuList = this.flatten(siderMenuList)
        const menuPathList = sMenuList.map(item => item.key)
        const opEnum = {}
        sMenuList.forEach(item => {
            opEnum[item.key] = item.opCodeList
        })
        return { menuPathList, opEnum }
    }

    flatten = (data) => {
        return data.reduce(this.flattenCB, [])
    }

    flattenCB = (arr, { key, opCodeList, children = [] }) => {
        return arr.concat([{key, opCodeList}], this.flatten(children))
    }

    render () {
        const { newAllRoutes, routeList, opEnum } = this._filterRoute(this.props.siderMenuList || [])
        return (
            <div className="app">
                <SiderMenu
                    collapsed = { this.state.collapsedBool }
                    siderMenu = { this.props.siderMenuList }
                />
                <div className="app-content">
                    <Header
                        collapsed = { this.state.collapsedBool }
                        toggle = { this.toggle }
                        userName = { this.props.userName }
                        logout = { this._logout }
                        updatePassword = { this._updatePassword }
                    />
                    <BreadcrumbCom
                        location = {this.props.history.location}
                        match = { this.props.match }
                        routes = { newAllRoutes }
                    />
                    <div className="app-content-component" style={{height: `${this.props.clientHeight - 160}px`}}>
                        <ContentComponent
                            clientHeight = { this.props.clientHeight - 160}
                            routeList = { routeList }
                            opEnum = { opEnum }
                        />
                    </div>
                    <Footer />
                </div>
                <Modal
                    className="drug-modal"
                    title = "修改密码"
                    visible = { this.props.isShowModal }
                    maskClosable = { false }
                    onOk = { this._handleOkPassword }
                    confirmLoading = { this.state.confirmLoading }
                    onCancel = { this._handleOkPassword}
                >
                    密码修改部分
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.global.isAuth,
        userName: state.global.userName,
        token: state.global.token,
        clientHeight: state.global.clientHeight,
        siderMenulist: state.global.siderMenuList
    }
}

export default connect(mapStateToProps)(withRouter(Form.create()(App)))