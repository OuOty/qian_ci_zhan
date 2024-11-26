<template>
    <div class="body">
        <div class="message" v-if="showMessage">
            签到成功，加10酷币！
        </div>
        <div class="head">
            <img :src="headUrl || defaultHead" alt="">
        </div>
        <div class="qd">
            <div class="qd-border border-move" @click="qiandao" v-if="!isQianDao">
                <img src="@/assets/rili.svg" alt="rili">
                <p>点我签到</p>
                
                <p>{{ currentTime }}</p>
            </div>
            <div v-if="isQianDao" class="word">
                Blue
            </div>
        </div>
        <div class="study">
            <div class="border-move"><p>Learn</p></div>
            <div class="border-move"><p>Review</p></div>
        </div>
        <div class="nav-bottom">
            <img src="@/assets/myContent.svg" alt="">
            <img src="@/assets/tongji.svg" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import headImage from '@/assets/head.svg'
    import { onMounted } from 'vue';

    const headUrl = ref<string | null>(null)
    const defaultHead = headImage

    const currentTime = ref(new Date().toLocaleTimeString());

    const updateTime = () => {
        currentTime.value = new Date().toLocaleTimeString();
    };

    let timer = null;

    onMounted(() => {
        updateTime(); // 初始化时间
        timer = setInterval(updateTime, 1000); // 每秒更新一次
    });

    const isQianDao = ref(false)
    const qiandao = () => {
        isQianDao.value = true
        showMessage.value = true
        setTimeout(() => {
            showMessage.value = false
        },3000)
    }

    const showMessage = ref(false)


</script>

<script lang="ts">
    export default {
        name: 'Home'
    }
</script>

<style scoped>
    .body {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgb(252, 170, 170);
        

        background: linear-gradient(90deg, rgb(196, 194, 252), rgb(106, 140, 241), rgb(135, 193, 232));
        background-size: 300% 300%; /* 放大背景以产生动态效果 */
        animation: gradient-animation 3s infinite; /* 使用动画 */
    }

    /* 定义渐变动画 */
    @keyframes gradient-animation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .body .message {
        display: flex;
        position: absolute;
        top: 10px;
        width: 300px;
        height: 60px;
        background-color: azure;
        border-radius: 15px;
        justify-content: center;
        align-items: center;
    }

    .body div {
        display: flex;
        width: 90%;
        height: 25%;
        /* background-color: rgb(175, 255, 162); */
    }

    .head {
        display: flex;
        justify-content: left;
        align-items: start;
    }

    .head img {
        width: 50px;
        margin-top: 10px;
        cursor: pointer;
    }

    .body .qd {
        /* background-color: aqua; */
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    .body .qd .qd-border {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 200px;
        height: 100%;
        border-radius: 15px;
        background-color: rgba(255, 255, 255,0.2);

        color: white;
    }

    .body .qd .qd-border img {
        height: 50px;
        margin-bottom: 15px;
    }

    .word {
        display: flex;
        justify-content: center;
        font-size: 50px;
        color: white;
    }

    .body .study {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: end;
    }

    .body .study div {
        /* background-color: rgb(38, 129, 129); */
        width: 40%;
        height: 90px;
        border-radius: 15px;
        padding: 15px;
        display: flex;
        align-items: center;
        font-size: 20px;
        background-color: rgba(255, 255, 255,0.2);
        color: white;
        cursor: pointer;
    }

    .body .nav-bottom {
        /* background-color: aqua; */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: end;
        padding-bottom: 20px;
        padding-left: 50px;
        padding-right: 50px;
    }

    .body .nav-bottom img {
        width: 70px;
        cursor: pointer;
    }

    .border-move {
        transition: all 0.3s ease; /* 平滑的动态效果 */
    }

    .border-move:hover {
        box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.5);
    }

</style>