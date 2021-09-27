import Vue from 'vue'
import VueRouter from 'vue-router'

import ViewResponse from '../components/ViewResponse'
import Faculty from '../components/Faculty'
import Approve from '../components/Approve'
import Delete from '../components/Delete'
import StudentLogin from '../components/StudentLogin'
import CollegeLogin from '../components/CollegeLogin'
import AdminLogin from '../components/AdminLogin'
import HomePage from '../components/HomePage';

Vue.use(VueRouter)

const routes = [
        {
                path: '/',
                name: 'HomePage',
                component: HomePage
        },
        {
                path: '/AdminLogin',
                name: 'AdminLogin',
                component: AdminLogin
        },
        {
                path: '/CollegeLogin',
                name: 'CollegeLogin',
                component: CollegeLogin
        },
        {
                path: '/StudentLogin',
                name: 'StudentLogin',
                component: StudentLogin
        },
        {
                path: '/AdminLogin/Approve',
                name: 'Approve',
                component: Approve
        },
        {
                path: '/AdminLogin/Delete',
                name: 'Delete',
                component: Delete
        },
        {
                path: '/CollegeLogin/Faculty',
                name: 'Faculty',
                component: Faculty
        },	
        {
                path: '/StudentLogin/ViewResponse',
                name: 'ViewResponse',
                component: ViewResponse
        },		
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;