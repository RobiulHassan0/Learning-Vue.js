import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Posts from '../pages/Posts.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/posts/:id',
        name: 'posts',
        component: Posts,
        props: true
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})