import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import Blog from './views/Blog'
import Policy from './views/Policy'
import About from './views/About'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
        path: '/',
        name: 'home',
        component: Home,
        },
        {
        path: '/blog',
        name: 'blog',
        component: Blog,
        },
        {
        path: '/about',
        name: 'about',
        component: About,
        },
        {
        path: '/policy',
        name: 'policy',
        component: Policy,
        },
        { path: '*', 
        redirect: { name: 'home' }}
    ]
})