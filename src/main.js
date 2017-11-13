import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Home from  "./components/Home.vue"
import  list from  "./components/list.vue";
import Cart from "./components/Cart.vue";
import Me from  "./components/Me.vue";

//vue滑块
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.use(VueRouter);//如果要使用路由，这个要加上
const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/home", component: Home},
        {path: "/list", component: list},
        {path: "/cart", component: Cart},
        {path: "/me", component: Me},
        {path: "/", redirect: "/home"}
    ]
})
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
