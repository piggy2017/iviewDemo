<template>
    <div class="Input">
        <Row :gutter="24">
            <Col span="8">
                <Input v-model="value1" size="large" placeholder="large input"></Input>
            </col>
            <Col span="8">
                <Input v-model="value2"  placeholder="default input"></Input>
            </col>
            <Col span="8">
                <Input v-model="value3" size="small" placeholder="small input"></Input>
            </col>
        </Row>
        <p style="margin-top: 15px;">开启属性 clearable 可显示清空按钮</p>
        <Row :gutter="24" style="margin-top: 15px">
            <Col span="8">
                <Input v-model="value4"  clearable placeholder="clearable input"></Input>
            </col>
        </Row>
        <p style="margin-top: 15px;">带Icon的输入框,通过 icon 属性可以在输入框右边加一个图标。</p>
        <Row :gutter="24" style="margin-top: 15px">
            <Col span="8">
                <Input v-model="value5" icon="ios-clock-outline" placeholder="icon input"></Input>
            </col>
        </Row>
        <p style="margin-top: 15px;">通过设置属性 type 为 textarea 来使用文本域，用于多行输入,通过设置属性 rows 控制文本域默认显示的行数。设置属性 autosize，文本域会自动适应高度的变化。autosize也可以设定为一个对象，指定最小行数和最大行数。</p>
        <Row :gutter="24" style="margin-top: 15px">
            <Col span="8">
                <Input v-model="value6" type="textarea" :rows="5" placeholder="textarea input"></Input>
            </col>
            <Col span="8">
                <Input v-model="value7" type="textarea" autosize placeholder="textarea input"></Input>
            </col>
        </Row>
        <p style="margin-top: 15px;">通过前置和后置的 slot 可以实现复合型的输入框。</p>
        <Row :gutter="24" style="margin-top: 15px">
            <Col span="8">
                <Input v-model="value8"  placeholder="复合型input">
                    <span slot="prepend">http://</span>
                    <span slot="append">.com</span>
                </Input>
            </col>
            <Col span="8">
                <Input v-model="value9"  placeholder="复合型input">
                   <Select v-model="select1" slot="prepend" style="width: 80px">
                       <Option value="http">http://</Option>
                       <Option value="https">https://</Option>
                   </Select>
                    <Select v-model="select2" slot="append" style="width: 80px">
                        <Option value="com">.com</Option>
                        <Option value="cn">.cn</Option>
                        <Option value="io">.io</Option>
                    </Select>
                </Input>
            </col>
        </Row>

    </div>
</template>
<script>
    export default {
        data(){
            return{
                value1:"",
                value2:"",
                value3:"",
                value4:"",
                value5:"",
                value6:"",
                value7:"",
                value8:"",
                value9:"",
                select1:"https",
                select2:"com"
            }
        }
    }
</script>
<style>
    .Input{
        width: 100%;
        height: 100%;
        background-color: #fff;
        padding-top: 20px;
        padding-left: 20px;
    }
    .Input .ivu-input-wrapper{
       width: 80%;
    }
</style>
