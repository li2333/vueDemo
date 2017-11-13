<template>
    <div>
        <h2>cart!!!!</h2>
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide><img src="" alt=""></swiper-slide>
            <swiper-slide>slide2</swiper-slide>
            <swiper-slide>slide3</swiper-slide>
        </swiper>
    </div>

</template>
<script>
    import {swiper,swiperSlide} from "vue-awesome-swiper"
    export default{
        data(){

            return{
                swiperOption:{
                    autoplay:3000,
                }
            }
        },

    }
</script>
<style>

</style>