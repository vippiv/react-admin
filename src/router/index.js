import routePath from './routePath'
import HomePage from '@/views/homePage'
import FlexSearchBar from '@/views/interaction/flexSearchBar'
import TradeList from '@/views/trade'
import ProductsAdd from '@/views/trade/add'
import DynamicForm from '@/views/interaction/dynamicForm'
import InjectScript from '@/views/interaction/injectScript'

const routes = [
	{
		key: routePath.home,
		path: routePath.home,
		exact: true,
		component: HomePage
	}, {
		key: routePath.homePage,
		path: routePath.homePage,
		exact: true,
		component: HomePage
	}, {
		key: routePath.flexSearchBar,
		path: routePath.flexSearchBar,
		exact: true,
		component: FlexSearchBar
	}, {
		key: routePath.tradeList,
		path: routePath.tradeList,
		exact: true,
		component: TradeList,
		breadcrumbName: '交易记录'
	}, {
		key: routePath.tradeList,
		path: routePath.productsAdd,
		exact: true,
		component: ProductsAdd,
		parentPath: routePath.tradeList,
		breadcrumbName: '新增产品'
	}, {
		key: routePath.dynamicForm,
		path: routePath.dynamicForm,
		exact: true,
		component: DynamicForm
	}, {
		key: routePath.injectScript,
		path: routePath.injectScript,
		exact: true,
		component: InjectScript
	}
]

export default routes