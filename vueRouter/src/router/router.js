import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../home.vue';
import about from '../about.vue';
import user from '../user.vue';

Vue.use(VueRouter);

const routes=[
    {
        path:"/home",
        component:home
    },
    {
        path:'/about',
        component:about
    },
    {
        path:'/user/:id',
        component:user
    },
    {
        path:'/',
        redirect:'/home'
    }
]

var router = new VueRouter({
    routes
})

export default router;