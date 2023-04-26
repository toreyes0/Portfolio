import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import NotFound from '../components/404NotFound.vue'

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/projects',
			name: 'projects',
			component: ProjectsView
		},
		{
			path: '/:pathMatch(.*)',
			component: NotFound
		}
	]
})

export default router
