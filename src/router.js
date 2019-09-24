import Vue from 'vue'
import router from 'vue-router'
import Home from './views/Home.vue'
import Natours from './views/Natours.vue'
import Trillo from './views/Trillo.vue'
import Nexter from './views/Nexter.vue'
import Grid from './views/Grid.vue'

Vue.use(router)

export default new router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
		},
		{
      path: '/natours',
			name: 'natours',
			meta: { bodyClass: 'natours-page'},
			component: Natours,
		},
		{
			path: '/trillo',
			name: 'trillo',
			meta: { bodyClass: 'trillo-page'},
			component: Trillo
		},
		{
			path: '/nexter',
			name: 'nexter',
			meta: { bodyClass: 'nexter-page'},
			component: Nexter
		},
		{
			path: '/grid',
			name: 'grid',
			component: Grid
		}
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
