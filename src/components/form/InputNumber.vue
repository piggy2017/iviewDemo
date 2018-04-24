<template>
    <div class="InputNumber">
        <InputNumber :max="10" :min="1" v-model="value1"></InputNumber>
        <p style="margin: 15px 0">通过 formatter 格式化数字，以展示具有具体含义的数据，往往需要配合 parser 一起使用</p>
        <InputNumber  :max="10000"
                      v-model="value9"
                      :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')"
                      :parser="value => value.replace(/$s?|(,*)/g, '')">

        </InputNumber>
        <InputNumber
            :max="100"
            v-model="value10"
            :formatter="value => `${value}%`"
            :parser="value => value.replace('%', '')"></InputNumber>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                value1:3,
                value9:999,
                value10:99
            }
        }
    }
</script>
<style>
.InputNumber{
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #fff;
    overflow: auto;
}
</style>
