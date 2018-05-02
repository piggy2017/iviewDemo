<template>
    <div class="goodsDetail">
        接收到的id是：{{ $route.params.goodsId }}
        接收到的name是：{{$route.params.name}}
        接收到的price是：{{$route.params.price}}
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        },
        created:function(){
            console.log(this.$route);
        }
    }
</script>
<style>
.goodsDetail{
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #fff;
    overflow: auto;
}
</style>
