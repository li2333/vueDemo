<template>

    <div id="home">

        <swiper :options="swiperOption" ref="mySwiper">

            <swiper-slide v-for="(image,index) in imgs" :key="index" >
                <img :src="image.img" alt="">
            </swiper-slide>



        </swiper>
        <div class="swiper-pagination" solt="pagination"></div>
        <ul>
            <li v-for="book in books">
                <a :href="book.alt">
                    <img :src="book.image" alt="">
                   <div>{{book.title}}</div>
                </a>
            </li>
        </ul>
    </div>


</template>
<script>
    import axios from "axios";
    import Load from  "./loading.vue"
    import  {swiper,swiperSlide} from "vue-awesome-swiper";
    export default{
        data(){
            return{
                components:{
                    Load,
                },
                books:[],
                imgs:[],
                swiperOption:{
                    autoplay:5000,
                    loop:true,
                    pagination : '.swiper-pagination',
                    paginationClickable:true,
                    effect : 'cube',
                    cube: {
                        slideShadows: true,
                        shadow: true,
                        shadowOffset: 100,
                        shadowScale: 0.6
                    }

                }
            }
        },
        beforeCreate(){

        },
        created(){
            let url="http://localhost:8081?myUrl=https://api.douban.com/v2/book/search?q=javascript";
            let that=this;
            axios.get(url).then((res)=>{
//                console.log(res);
                that.books=res.data.books;
//                console.log(that.books);
            }).catch(function (err) {
                console.log(err);
            });
            axios.get("http://localhost:8080/staic/banner.json").then((res)=>{
//                console.log(res);
                that.imgs=res.data;
                console.log(that.imgs);
            })
        }
    }
</script>
<style>
    #home{
        position: relative;
    }
    #home ul li {
        float: left;
        width: 20%;
        height:200px;
        margin: 2% 2%;
        border: 1px solid #eee;
        border-radius: 10px;
        box-shadow: 0 0 5px #000;

    }
    #home ul li a{
        display: inline-block;
        width: 100%;
        height:150px;
    }
    #home ul li img{
        width: 100%;
        height: 90%;
        border-radius: 10px;
    }
    .swiper-container{

    }
    .swiper-slide img{
        width: 100%;
        height: 500px;

    }
    .swiper-pagination{
        left: 50%;
        bottom: 15%;
        transform: translateX(-50%);
    }
    .swiper-pagination-bullet{
        width: 18px;
        height:18px;
        margin:0 10px;

    }
    .swiper-pagination-bullet-active{
        background: skyblue;
    }
</style>