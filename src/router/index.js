import routePath from './routePath'
import HomePage from '@/views/homePage'
import FlexSearchBar from '@/views/interaction/flexSearchBar'
import TradeList from '@/views/trade'
import ProductsAdd from '@/views/trade/add'

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
	}
]

export default routes