import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import './index.css'

class BreadcrumbCom extends Component {
    constructor (props) {
        super(props)
        this.state = {
            routes: []
        }
        this.goBack = this.goBack.bind(this)
    }

    static getDerivedStateFromProps = (props, state) => {
        return {
            routes: [...props.routes]
        }
    }

    _resolvePath = (path, resolveRoutes) => {
        let route = this.state.routes.find(route => {
            if (route.path.includes(':')) {
                let arg = route.path.split(':')
                return path.includes(arg[0])
            }
            return route.path === path
        })
        if (!route) {
            return []
        }
        let parentPath = route.parentPath
        resolveRoutes.unshift(route)
        if (parentPath) {
            return this._resolvePath(parentPath, resolveRoutes)
        }
        return resolveRoutes
    }

    _createBreadcrumbItems = () => {
        let path = this.props.location.pathname
        let resolveRoutes = []
        resolveRoutes = this._resolvePath(path, resolveRoutes)
        let breadcrumbItems = resolveRoutes.map((resolveRoute, index, routes) => {
            return this._createBreadcrumbItem(resolveRoute, index, routes)
        })
        return breadcrumbItems
    }

    _replacePath(path, url) {
        let pathArr = path.split('/')
        let urlArr = url.split('/')
        let newPath = pathArr.map((pathStr, index) => {
            return urlArr[index]
        }).join('/')
        return newPath
    }

    _createBreadcrumbItem(route, index, routes) {
        let breadcrumbName = route.breadcrumbName
        if (!breadcrumbName) {
            breadcrumbName = ''
            let params = this.props.match.params
            for (let i in params) {
            if (params[i]) {
                breadcrumbName = params[i]
            }
            }
        }
        if ((/:/).test(route.path)) {
            let path = this._replacePath(route.path, this.props.match.url)
            return (
            <Breadcrumb.Item
                key={route.path}
                className={'breadcrumb-placeholder'}
            >
                <Link to={path}>{breadcrumbName}</Link>
            </Breadcrumb.Item>
            )
        }
        return route.component ? (<Breadcrumb.Item key={route.path}><Link to={route.path}>{breadcrumbName}</Link></Breadcrumb.Item>) : (<Breadcrumb.Item key={route.path}>{breadcrumbName}</Breadcrumb.Item>)
    }

    goBack() {
        window.history.go(-1)
    }

    render() {
        return (
            <Breadcrumb className='breadcrumb-com'>
            { this._createBreadcrumbItems() }
            </Breadcrumb>
        )
    }
}

export default BreadcrumbCom