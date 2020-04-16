import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/front/home/index'
import HouseCleaning from '../views/front/housecleaning/index'
import Plumbing from '../views/front/plumbing/index'
import Carpenter from '../views/front/carpenter/index'
import OfficeClean from '../views/front/officecleaning/index'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
    	{
    		path: '/house-cleaning', 
    		component: HouseCleaning
    	},
      {
        path: '/plumbing', 
        component: Plumbing
      },
      {
        path: '/carpentery', 
        component: Carpenter
      },
      {
        path: '/office-cleaning', 
        component: OfficeClean
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
