<template>
    <div class="flex_content">
        <div class="load">
            <div class="heart">
                <div class="heart_0"></div>
                <div class="heart_1"></div>
                <div class="heart_2"></div>
                <div class="heart_3"></div>
                <div class="heart_4"></div>
                <div class="heart_5"></div>
                <div class="heart_6"></div>
                <div class="heart_7"></div>
                <div class="heart_8"></div>

            </div>

        </div>

    </div>

</template>
<script>
    export default{

    }
</script>
<style>
    *{
        margin: 0;
        height: 0;
    }
    body{
        width: 100%;
        height:100%;
        background: wheat;
    }
    .flex_content{
        width: 100%;
        height: 637px;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        /* -webkit-box-align: center;
                      -ms-flex-align: center;
                      align-items: center; */


    }

    .load{
        text-align: center;
    }
    .heart{
        position: relative;
        font-size: 0;
        width: 138px;
    }

    [class*="heart_"]{
        position: absolute;
        top: -100px;
        width: 15px;
        height: 15px;
        background: yellow;
        border-radius: 7.5px;
        /*animation: dh_3 3.2s infinite;*/
    }
    /*动画效果*/
    .heart_0,.heart_8{
        animation: dh_1 3.2s infinite;
    }
    .heart_1,.heart_7{
        animation: dh_2 3.2s infinite;
    }
    .heart_2,.heart_6{
        animation:  dh_3 3.2s infinite;
    }
    .heart_3,.heart_5{
        animation: dh_4 3.2s infinite;
    }
    .heart_4{
        animation: dh_5 3.2s infinite;
    }



    .heart_0{
        left: 0px;
        background-color: #ec2d73;
        animation-delay: 0s;

    }
    .heart_1{
        left: 20px;
        background-color: #fdc800;
        animation-delay: 0.2s;
    }
    .heart_2{
        left: 40px;
        background-color: #eb5324;
        animation-delay: 0.4s;
    }
    .heart_3{
        left: 60px;
        background-color: #76469a;
        animation-delay: 0.6s;

    }
    .heart_4{
        left: 80px;
        background-color: #1470bd;
        animation-delay: 0.8s;
    }
    .heart_5{
        left: 100px;
        background-color: #ec2d73;
        animation-delay: 1s;
    }
    .heart_6{
        left: 120px;
        background-color: #47b264;
        animation-delay: 1.2s;

    }
    .heart_7{
        left: 140px;
        background-color: #fdc800;
        animation-delay: 1.4s;

    }
    .heart_8{
        left: 160px;
        background-color: #eb5324;
        animation-delay: 1.6s ;

    }
    @keyframes dh_1{
        0%, 10%, 90%, 100% {
            height: 15px;
            top: -100px;
        }
        45%, 55% {
            height: 30px;
            top: -110px;
        }

    }

    @keyframes dh_2{
        0%, 10%, 90%, 100% {
            height: 15px;
            top: -100px;
        }
        45%, 55% {
            height: 60px;
            top: -120px;
        }

    }

    @keyframes dh_3{
        0%, 10%, 90%, 100% {
            height: 15px;
            top: -100px;
        }
        45%, 55% {
            height: 85px;
            top: -130px;
        }

    }
    @keyframes dh_4{
        0%, 10%, 90%, 100% {
            height: 15px;
            top: -100px;
        }
        45%, 55% {
            height: 85px;
            top: -120px;
        }

    }
    @keyframes dh_5{
        0%, 10%, 90%, 100% {
            height: 15px;
            top: -100px;
        }
        45%, 55% {
            height: 90px;
            top: -110px;
        }

    }

</style>