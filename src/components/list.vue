<template>
    <div>
        <h2>list!!!!</h2>
        <swiper :options="swiperOption" ref="mySwiper">
            <!--slides-->
            <swiper-slide>slide1</swiper-slide>
            <swiper-slide>slide2</swiper-slide>
            <swiper-slide>slide3</swiper-slide>
            <!--optional controls-->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>

    </div>
</template>
<script>
    import {swiper,swiperSlide} from "vue-awesome-swiper"
    export default{
        name:"carrouse1",
        data(){
            return{
                swiperOption:{
                    autoplay:2000,
                }
            }
        },
        components:{
            swiper,
            swiperSlide
        },
        //定义这个swiper对象
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },
    }
</script>
<style>

</style>