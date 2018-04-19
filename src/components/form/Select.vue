<template>
    <div class="Select">
        <Select v-model="select1" clearable style="width: 200px;">
            <Option v-for="item in citylist" :value="item.value">{{item.label}}</Option>
        </Select>
        <p style="margin: 15px 0;">通过设置属性clearable可以清空已选项，仅适用于单选模式。</p>
        <p style="margin: 15px 0;">选中的是：{{select1}}</p>
        <Select v-model="select2" multiple  style="width: 260px;">
            <Option v-for="item in citylist" :value="item.value" :key="item.value">{{item.label}}</Option>
        </Select>
        <p style="margin: 15px 0;">选中的是：{{select2}}</p>
        <p style="margin: 15px 0">通过设置属性multiple可以开启多选模式。多选模式下，model 接受数组类型的数据，所返回的也是数组。</p>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                select1:"",
                select2:[],
                citylist:[
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ]
            }
        }
    }
</script>
<style>
.Select{
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding-top: 20px;
}
</style>
