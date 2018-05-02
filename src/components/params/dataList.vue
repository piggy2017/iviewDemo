<template>
    <div class="dataList">
        <ul>
            <li v-for="item in itemList" class="item-list">
                <router-link :to="{name:'goodsDetail',params:{goodsId:item.goodsId,name:item.goodsName,price:item.price}}">
                <!--<router-link :to="'/main/goodsDetail/'+item.goodsId">-->
                    <span>{{item.goodsName}}</span>
                    <span>当前商品Id:{{item.goodsId}}</span>
                    <span>￥{{item.price}}元</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                itemList:[]
            }
        },
        methods:{
            init(){
                axios.get("http://jspang.com/DemoApi/oftenGoods.php").then(res=>{
                    console.log(res)
                    this.itemList=res.data
                })
            }
        },
        created:function(){
            this.init()
        }
    }
</script>
<style>
.dataList{
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #fff;
    overflow: auto;
}
    .item-list{
        width: 300px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border: 1px solid red;
        display: inline-block;
        margin-left: 20px;
        margin-top: 20px;
        border-radius: 5px;
    }
</style>
