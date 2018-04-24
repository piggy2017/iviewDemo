<template>
    <div class="Cascader">
        <al-selector v-model="res_s" data-type="name"/>
        <p style="margin: 15px 0">选择的是:{{res_s}}</p>
        <p style="margin: 15px 0">level 要显示的级别，如设为2则显示省、市和县，即3级，级别可设为0、1、2、3四级</p>
        <al-selector v-model="res_l" data-type="name" :level="2"/>
        <p style="margin: 15px 0">data-type 返回数据的类型，'all':城市编码和名称，'code':只返回编码，'name':只返回名称</p>
        <al-selector v-model="res_d" data-type="name" level="1"/>
    </div>
</template>
<script>
    import AreaData from 'area-data';
    export default {
        data(){
            return{
                res_s:[],
                res_l:[],
                res_d:["四川省","成都市"]
            }
        }
    }
</script>
<style>
.Cascader{
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #fff;
    overflow: auto;
}
</style>
