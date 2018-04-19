<template>
    <div class="login">
    <Row class="login-row">
        <Col span="6" offset="17">
        <Card style="width: 300px;margin-top: 300px;">
            <p slot="title">
                <Icon type="log-in"></Icon>
                欢迎登录
            </p>
            <Form class="login-form" ref="loginForm" label-position="right" :model="loginForm" :rules="loginRules">
                <FormItem prop="name">
                    <Input type="text" v-model="loginForm.name" placeholder="Enter your name">
                        <Icon type="person" size="16" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <!--<FormItem prop="mail">-->
                    <!--<Input v-model="loginForm.mail" placeholder="Enter your e-mail">-->
                        <!--<Icon type="email" size="16" slot="prepend"></Icon>-->
                    <!--</Input>-->
                <!--</FormItem>-->
                <FormItem prop="password">
                    <Input type="password" v-model="loginForm.password" placeholder="Enter password">
                         <Icon type="locked" size="16" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit()" long>登 录</Button>
                </FormItem>
            </Form>
            <p class="form-tips">输入任意姓名和密码都可登录</p>
        </Card>
        </Col>
    </Row>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                loginForm:{
                    name:"",
                    mail:"",
                    password:""
                },
                loginRules:{
                    name: [
                        {required:true,message:"必填项",trigger:"blur"}
                    ],
                    mail: [
                        { required: true, message: '必填项', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式错误', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '必填项', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不少于六位', trigger: 'blur' }
                    ]
                },
            }
        },
        methods:{
            handleSubmit(){
                console.log(123);
                this.$refs.loginForm.validate((valid)=>{
                    if(valid){
                        this.$Message.success('success!');
                        this.$router.push({
                            name:"main"
                        })
                    }else{
                        this.$Message.error('Fail!');
                    }
                })
            },
            add(){
                console.log(321);
            }
        }
    }
</script>
<style scoped="true">
    .login{
        width: 100%;
        height: 100%;
        background-image: url('https://file.iviewui.com/iview-admin/login_bg.jpg');
        background-size: cover;
        background-position: center;
        position: relative;
    }
    .form-tips{
        font-size: 10px;
        text-align: center;
        color: #c3c3c3;
    }

</style>
