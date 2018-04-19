<template>
    <div class="Radio">
        <Row :gutter="24">
            <Col span="8">
                <RadioGroup v-model="phone">
                    <Radio label="apple">
                        <Icon type="social-apple"></Icon>
                        <span>Apple</span>
                    </Radio>
                    <Radio label="android">
                        <Icon type="social-android"></Icon>
                        <span>Android</span>
                    </Radio>
                    <Radio label="windows">
                        <Icon type="social-windows"></Icon>
                        <span>Windows</span>
                    </Radio>
                </RadioGroup>
                 <p>选中的是:{{phone}}</p>
            </Col>
            <Col span="8">
                <RadioGroup v-model="animal">
                    <Radio label="金斑蝶"></Radio>
                    <Radio label="爪哇犀牛"></Radio>
                    <Radio label="印度黑羚"></Radio>
                </RadioGroup>
                <p>选中的是:{{animal}}</p>
            </Col>
            <Col span="8">
                <RadioGroup v-model="displayAnimal">
                    <Radio label="金斑蝶" disabled></Radio>
                    <Radio label="爪哇犀牛"></Radio>
                    <Radio label="印度黑羚"></Radio>
                </RadioGroup>
                <p>选中的是:{{displayAnimal}}</p>
            </Col>
        </Row>
        <p style="margin: 15px 0">Checkbox 多选框</p>
        <Row :gutter="24">
            <Col span="8">
                <CheckboxGroup v-model="social">
                    <Checkbox label="twitter">
                        <Icon type="social-twitter"></Icon>
                        <span>Twitter</span>
                    </Checkbox>
                    <Checkbox label="facebook">
                        <Icon type="social-facebook"></Icon>
                        <span>Facebook</span>
                    </Checkbox>
                    <Checkbox label="github">
                        <Icon type="social-github"></Icon>
                        <span>Github</span>
                    </Checkbox>
                    <Checkbox label="snapchat">
                        <Icon type="social-snapchat"></Icon>
                        <span>Snapchat</span>
                    </Checkbox>
                </CheckboxGroup>
                <p>选中的是:{{social}}</p>
            </Col>
            <Col span="8">
                <CheckboxGroup v-model="fruit">
                    <Checkbox label="香蕉"></Checkbox>
                    <Checkbox label="苹果"></Checkbox>
                    <Checkbox label="西瓜"></Checkbox>
                </CheckboxGroup>
                <p>选中的是:{{fruit}}</p>
            </Col>
            <Col span="8">
                <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                    <Checkbox
                        :indeterminate="indeterminate"
                        :value="checkAll"
                        @click.prevent.native="handleCheckAll">全选</Checkbox>
                </div>
                <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                    <Checkbox label="香蕉"></Checkbox>
                    <Checkbox label="苹果"></Checkbox>
                    <Checkbox label="西瓜"></Checkbox>
                </CheckboxGroup>
                <p>在实现全选效果时，你可能会用到 indeterminate 属性。示例代码只是一种写法，业务中可以用更多的方法，比如计算属性。</p>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                phone: 'apple',
                animal: '爪哇犀牛',
                displayAnimal:"",
                social:[],
                fruit:["西瓜"],
                indeterminate: true,
                checkAll: false,
                checkAllGroup: ['香蕉', '西瓜']
            }
        },
        methods: {
            handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;
                if (this.checkAll) {
                    this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {
                console.log(data);
                if (data.length === 3) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            }
        }
    }
</script>
<style>
.Radio{
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 20px 0 0 20px;
}
</style>
