<template>
    <div id="app">
        <!--通过接收各个子模块，实现模块化设计-->

        <tabs></tabs>
        <router-view></router-view>
    </div>
</template>

<script>

//    <!--导入封装好的模块同时也导出本身，供min.js使用-->
    import tabs from "./components/Tabs.vue";
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            tabs
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }



    a {
        color: #42b983;
    }
</style>
