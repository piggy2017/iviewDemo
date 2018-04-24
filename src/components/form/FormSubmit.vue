<template>
    <div class="FormSubmit">
        <p style="margin: 15px 0">给 FormItem 设置属性 label 可以显示表单域的标签，需要给 Form 设置 label-width</p>
        <p style="margin: 15px 0">给 FormItem 设置属性 label-for 可以指定原生的 label 标签的 for 属性，配合设置控件的 element-id 属性，可以点击 label 时聚焦控件。</p>
        <p style="margin: 15px 0">设置属性 label-position，可以改变表单域标签的位置，left 为左对齐，right 为右对齐，top 会置于表单域顶部。</p>
        <p style="margin: 15px 0">给 Form 设置属性 rules，同时给需要验证的 FormItem 设置属性 prop 指向对应字段即可。</p>
        <Row>
            <Col span="12">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <FormItem label="name" prop="name">
                        <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
                    </FormItem>
                    <FormItem label="E-mail" prop="mail">
                        <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
                    </FormItem>
                    <FormItem label="City" prop="city">
                        <Select v-model="formValidate.city" placeholder="Select your city">
                            <Option value="beijing">New York</Option>
                            <Option value="shanghai">London</Option>
                            <Option value="shenzhen">Sydney</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Date">
                        <Row>
                            <Col span="11">
                                <FormItem prop="date">
                                    <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                                </FormItem>
                            </Col>
                            <Col span="2" style="text-align: center">-</Col>
                            <Col span="11">
                                <FormItem prop="time">
                                    <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                                </FormItem>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="Gender" prop="gender">
                        <RadioGroup v-model="formValidate.gender">
                            <Radio label="male">Male</Radio>
                            <Radio label="female">Female</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="Hobby" prop="interest">
                        <CheckboxGroup v-model="formValidate.interest">
                            <Checkbox label="Eat"></Checkbox>
                            <Checkbox label="Sleep"></Checkbox>
                            <Checkbox label="Run"></Checkbox>
                            <Checkbox label="Movie"></Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    <FormItem label="Desc" prop="desc">
                        <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                        <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                    </FormItem>
                </Form>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                formValidate:{
                    name:"",
                    mail:"",
                    city:"",
                    date:"",
                    time:"",
                    gender:"",
                    interest:[],
                    desc:""
                },
                ruleValidate:{
                    name:[
                        {required:true,message:"名字是必填项", trigger: 'blur'}
                    ],
                    mail:[
                        {required:true,message:"邮箱是必填项",trigger:"blur"},
                        {type:"email",message:"邮箱格式不正确",trigger:"blur"}
                    ],
                    city:[
                        {required:true,message:"请选择城市",trigger:"change"}
                    ],
                    gender:[
                        {required:true,message:"请选择性别",trigger:"change"}
                    ],
                    interest:[
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                        { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                        { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ],
                    date: [
                        { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    ],
                }
            }
        },
        methods:{
            handleSubmit(name){
                this.$refs.formValidate.validate(valid=>{
                    if(valid){
                        this.$Message.success("提交成功!")
                    }else{
                        this.$Message.error("表单有误!")
                    }
                })
            },
            handleReset(name){
                this.$refs.formValidate.resetFields();
            }
        }
    }
</script>
<style scoped="scoped">
.FormSubmit{
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #fff;
    overflow: auto;
}
</style>
