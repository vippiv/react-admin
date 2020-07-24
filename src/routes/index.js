import Login from '../views/login'
import FrontIndex from '../views/front/index/index'
import Todo from '../views/front/todo/index'
import Index from '../views/admin/dashboard/index'
import List from '../views/admin/products/list'
import Edit from '../views/admin/products/edit'
import SyncManage from '../views/admin/syncManage/index'
import backAdmin from '../views/admin/backAdmin/index'
import TplManage from '../views/admin/tplManage/index'
import BaseDemo from '@/views/front/index/index'
import TODOList from '@/views/front/todo/index'
import PageNotFound from '../views/404'

export const mainRoutes = [{
	path: '/',
	exact: true,
	component: FrontIndex
}, {
	path: '/todo',
	exact: true,
	component: Todo
}, {
	path: '/login',
	component: Login
}, {
	path: '/404',
	component: PageNotFound
}]

export const adminRoutes = [{
	path: '/admin/dashboard',
	component: Index,
	isShow: true,
	title: 'dashboard'
}, {
	path: '/admin/products/edit/:id',
	component: Edit
}, {
	path: '/admin/basedata',
	component: List,
	title: '基础数据',
	isShow: true,
	exact: true,
	subRoutes: [{
		path: '/admin/basedata/syncManage',
		component: SyncManage,
		title: '同步管理',
		exact: true,
		isShow: true
	}, {
		path: '/admin/basedata/backAdmin',
		component: backAdmin,
		title: '后台管理',
		isShow: true,
		exact: true
	}, {
		path: '/admin/basedata/tplManage',
		component: TplManage,
		title: '模板管理',
		isShow: true,
		exact: true
	}, {
		path: '/admin/basedata/systemManage',
		component: Index,
		title: '系统管理',
		isShow: true,
		exact: true
	}, {
		path: '/admin/basedata/setting',
		component: Index,
		title: '配置',
		isShow: true,
		exact: true
	}]
}, {
	path: '/admin/doctor',
	component: Index,
	title: '住院医生工作站',
	isShow: true,
	subRoutes: [{
		path: '/admin/doctor/quality',
		component: Index,
		title: '病历质控',
		isShow: true,
	}, {
		path: '/admin/doctor/img',
		component: Index,
		title: '图库管理',
		isShow: true,
	}]
}, {
	path: '/admin/nurse',
	component: Index,
	title: '住院护士工作站',
	isShow: true,
	subRoutes: [{
		path: '/admin/nurse/syncManage',
		component: Index,
		title: '图库管理',
		isShow: true
	}]
}, {
	path: '/admin/doorDoctor',
	component: Index,
	title: '门诊医生工作站',
	isShow: true,
	subRoutes: []
}]

export const frontRoutes = [
	{
		path: '/',
		component: BaseDemo,
		title: '基础DEMO',
		exact: true,
		isShow: true
	}, {
		path: '/todo',
		component: TODOList,
		title: 'TODOList',
		exact: true,
		isShow: true
	}
]

export const subRoutes = [{
	path: '/admin/basedata/syncManage',
	component: SyncManage,
	title: '同步管理',
	exact: true,
	isShow: true
}, {
	path: '/admin/basedata/backAdmin',
	component: backAdmin,
	title: '后台管理',
	isShow: true,
	exact: true
}, {
	path: '/admin/basedata/tplManage',
	component: TplManage,
	title: '模板管理',
	isShow: true,
	exact: true
}, {
	path: '/admin/basedata/systemManage',
	component: Index,
	title: '系统管理',
	isShow: true,
	exact: true
}, {
	path: '/admin/basedata/setting',
	component: Index,
	title: '配置',
	isShow: true,
	exact: true
}]