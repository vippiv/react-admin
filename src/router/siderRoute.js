// 这里的路由用于渲染
const routes = [
	{
		icon: "home",
		key: "/homePage",
		link: "/homePage",
		opCodeList: [],
		title: "dashboard",
		uuid: "1"
	},
	{
		link: "/interaction",
		icon: "apartment",
		key: "/interaction ",
		title: "交互样式",
		uuid: "433278b6-4130-4bb5-ba4c-ada41390bfd1 ",
		children: [{
			icon: "",
			key: "/flexSearchBar",
			link: "/flexSearchBar",
			title: "搜索栏弹性布局",
			uuid: "93c24576-da08-4de4-995d-08cd708c24f1"
		}]
	},
	{
		icon: "medicine-box",
		key: "/tradeList",
		title: "交易管理",
		uuid: "0e7fd64d-997f-4bba-b37e-094fe9921acb",
		children: [{
			icon: "",
			key: "/tradeList",
			link: "/tradeList",
			title: "交易记录",
			uuid: "2248708e-5a27-4dea-8670-38753009d340"
		}]
	}
]

export default routes