<template>
    <div class="login">
        <div class="login_box">
<!--            头像区-->
            <div class="avatar_box">
                <img src="~assets/logo.png"/>
            </div>
<!--            登录表单区-->
            <el-form label-width="0"  ref="loginFormRef" status-icon :model='loginForm' :rules="loginFormRules" class="login_form" >
<!--                用户名-->
                <el-form-item prop="username">
                    <el-input prefix-icon="iconfont icon-yonghu" v-model="loginForm.username" placeholder="请输入用户名" @keydown.enter.native="login"></el-input>
                </el-form-item>
<!--                密码-->
                <el-form-item prop="password">
                    <el-input type="password" prefix-icon="iconfont icon-mima" v-model="loginForm.password" @keydown.enter.native="login"></el-input>
                </el-form-item>
                <el-form-item  class="btns">
                    <el-button type="primary" @click="login" >登录</el-button>
                    <el-button  type="primary" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import * as loginHttp from 'network/login/login'


    export default {
        name: "Login",
        data(){
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                //表单的验证规则
                loginFormRules: {
                    //用户名是否合法
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
                        { pattern: /^([A-Za-z]\w{3,10})$/ ,message: '不能含有汉字' ,trigger: 'blur'}
                    ],
                    //密码是否合法
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
                        { pattern: /^([A-Za-z1-9]\w{3,10})$/ ,message: '不能含有汉字' ,trigger: 'blur'}
                    ]

                }
            }
        },
        methods: {
            resetLoginForm(){
                this.$refs.loginFormRef.resetFields();
            },
            login(){
                this.$refs.loginFormRef.validate((valid)=>{
                    if(!valid){
                        return
                    }
                    loginHttp.login(this.loginForm).then(({data})=>{
                        if(data.meta.status!=200) throw 'err';

                        // return this.$message.success('登陆成功！')
                        console.log(data);
                        window.sessionStorage.setItem('token',data.data.token)
                        return this.$message({
                            showClose: true,
                            message: '登录成功！',
                            type: 'success'
                        })
                    }).catch(err=>{
                        // return this.$message.error('登陆失败！')
                        return this.$message({
                            showClose: true,
                            message: '登录失败',
                            type: 'error'
                        })
                    })

                    this.$router.replace('/home')

                })
            }
        }
    }
</script>

<style scoped>
    .login{
        background-image: url("../../assets/img/30.jpg");
        background-repeat: no-repeat;
        height: 100%;
        background-size: 100% 100%;
    }


    .login_box{
        position: absolute;
        width: 450px;
        height: 450px;
        background-color: #fff;
        border-radius: 3px;
        left: 50%;
        top: 50%;
        margin-left: -225px;
        margin-top: -225px;
    }

    .avatar_box{
        position: absolute;
        width: 130px;
        height: 130px;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        left: 50%;
        margin-left: -80px;
        margin-top: -65px;
    }

    .avatar_box img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
    }

    .btns{
        display: flex;
        justify-content: flex-end;
    }

    .login_form{
        position: absolute;
        bottom: 30px;
        width: 100%;
        padding: 0 20px;
    }




</style>