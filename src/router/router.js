import Login from '../pages/login/login'
import WxLogin from '../pages/login/wx-login'
import Home from '../pages/home/home'
import Top from '../pages/home/top'
import Bill from '../pages/bill/bill'
import Me from '../pages/me/me'
import MeInfo from '../pages/me/meInfo'
import Ceremoney from '../pages/ceremony/ceremony'

const routes=[
	{
		path:'/',
		component:Login
	},
	{
		path:'/wxlogin',
		component:WxLogin
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/top',
		component:Top
	},
	{
		path:'/bill',
		component:Bill
	},
	{
		path:'/me',
		component:Me
	},
	{
		path:'/meInfo',
		component:MeInfo
	},
	{
		path:'/ceremony',
		component:Ceremoney
	},
]

export default routes