<template>
    <div class="body_">

        <div class="logo">
            <img src="@/assets/logo.png" alt="">
            <p>英语先过单词关，
                <span>6个人</span>
                用千词斩</p>
        </div>

        <div class="container" :class="{'active': addClass}">
            <div class="container-children login">
                <form>
                    <h1>用户登录</h1>
                    <p>您可以在下方输入账号密码登陆您的账户!</p>
                    <input type="text" placeholder="请输入账号" v-model="user_id">
                    <input type="password" placeholder="请输入密码" v-model="user_password">
                    <div class="manage-login">
                        <input type="checkbox" name="manageLogin" @change="changeLoginType">管理员登录
                    </div>
                    <button @click="loginAxios" :disabled="isDisabled()" ref="button_b">登录</button>
                </form>
            </div>


            <div class="container-children register">
                <form>
                    <h1>用户注册</h1>
                    <p>您可以在下方输入信息注册一个您的账户!</p>
                    <HeadImage></HeadImage>
                    <input type="text" placeholder="请输入昵称" :value="user_name">
                    <input type="text" placeholder="请输入账号" :value="user_id">
                    <input type="password" placeholder="请输入密码" :value="user_password">
                    <button @click="registerAxios">注册</button>
                </form>
            </div>


            <div class="container-floor">
                <div class="container-lay" id="container-lay">
                    <div class="floor-children left_floor">
                        <h1>已有账号？</h1>
                        <p>点我进行登陆吧。</p>
                        <button @click="exchangeClass">登录</button>
                    </div>
                    <div class="floor-children right_floor">
                        <h1>没有账号？</h1>
                        <p>点击注册去注册一个属于你的账号吧。</p>
                        <button @click="exchangeClass">注册</button>
                    </div>
                </div>
            </div>



        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import '../assets/login.css'
    import axios from "axios"
    import HeadImage from '@/components/HeadImage.vue';
    import router from '@/router';

    const addClass = ref(false)
    function exchangeClass(){
        addClass.value = !addClass.value
    }

    const user_id = ref('')
    const user_password = ref('')
    const user_name = ref('')

    const login_type = ref('user')
    const manage_id = ref('')
    const manage_password = ref('')

    // 绑定了登录按钮元素
    const button_b = ref<any>(null)
    const isDisabled = () => {
        if(user_id.value != '' && user_password.value != ''){
            if(button_b.value != null){
                button_b.value.classList.remove("disabled-btn")
            }
            return false
        }
        else {
            if(button_b.value != null){
                button_b.value.classList.add("disabled-btn")
            }
            return true
        }
    }

    const loginAxios = async (event:any) => {
        // if(login_type.value=="user"){
        //     router.push('/home')
        // }
        // else if(login_type.value=="manage"){
        //     router.push('/manage')
        // }
        event.preventDefault()
        const data = {
            user_id: user_id.value,
            user_password: user_password.value
        }
        try {
            const response = await axios.post("http://localhost:8080/user/login",data)
            
            if(response.status == 200){
                router.push('/home')
            }
            else if(response.status == 401){
                console.log(response.data)
            }
        } catch (error) {
            console.log("登录请求失败",error)
            alert("账号或密码错误")
        }
    }

    const registerAxios = async () => {
        try {
            const response = await axios.post("url")
            if(response.status == 200){
                console.log("注册成功")
            }
            else{
                console.log("注册失败")
            }
        } catch (error) {
            console.log("注册请求失败",error)
        }
    }

    function changeLoginType(){
        if(login_type.value == "manage"){
            login_type.value = "user"
        }
        else{
            login_type.value = "manage"
            manage_id.value = user_id.value
            manage_password.value = user_password.value
        }
        console.log(login_type.value)
    }

</script>

<script lang="ts">

</script>

<style scoped>

</style>