<!--这个文件主要封装一个模块的代码，通过export抛出，app.vue做出总接收，整合，
得到一个完整的网页-->
<!--tabs是app.vue的一个子模块，而list.vue;cart.vue。。。是tabs.vue的子模块-->
<template>
    <div class="tabs">
        <ul>
            <router-link to="/home" tag="li">
                <i class="icon-home"></i>
                <div>首页</div>
            </router-link>
            <router-link to="/list" tag="li">
                <i class="icon-list"></i>
                <div>分类</div>
            </router-link>
            <router-link to="/cart" tag="li">
                <i class="icon-cart"></i>
                <div>购物车</div>
            </router-link>
            <router-link to="/me" tag="li">
                <i class="icon-person"></i>
                <div>个人中心</div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    //将tabs export跑出去，供app 导入
    export default{}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    .tabs {
        position: fixed;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #eeeeee;
        background: #fff;
    }

    .tabs ul {
        display: flex;
    }

    .tabs ul li {
        flex: 1;
        text-align: center;
        padding: 10px 0px;
        font-size: 12px;
    }

    .tabs ul li i {
        font-size: 18px;
        color: #aaccdd;
    }
    .router-link-active{
        background: #eee;
    }
</style>
