<template>
    <div class="body_">
        <div class="content">
            <div>当前封禁用户：</div><div>{{ prop.user_id }}</div>
            <div>封禁时间：</div><div><DateUtil></DateUtil></div>
            <div>永久封禁：</div><div><input type="checkbox" name="" id="" @change="distroy" v-model="isDistroy"></div>
            <div class="but">
                <button @click="ok" class="disable">封禁</button>
                <button @click="quit" class="quit">取消</button>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
    import DateUtil from './DateUtil.vue';
    import { ref } from 'vue';

    const prop = defineProps(['user_id','quitWindow'])

    // const isShow = ref(true)
    const distroy = () => {
        if(isDistroy.value == false){
            return
        }
        const isOk = confirm('确定要永久封禁吗，请谨慎操作！')
        if(!isOk){
            isDistroy.value = false
            return;
        }
        // console.log(isOk)
        // console.log(isDistroy.value)
    }
    const isDistroy = ref(false)
    const ok = () => {
        // 待补充

        prop.quitWindow()
    }
    const quit = () => {
        prop.quitWindow()
    }
</script>

<script lang="ts">
    export default {
        name: 'SelectDate'
    }
</script>

<style scoped>
    .body_ {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99;
    }

    .body_ .content {
        background-color:aliceblue;
        border-radius: 15px;
        width: 80%;
        height: 80%;
        overflow: hidden;
        padding: 100px;

        display: grid;
        grid-template-columns: 1fr 5fr;
        grid-template-rows: repeat(3,1fr) 5fr;
    }

    .body_ .content .but {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: end;
        width: 100%;
        height: 100%;
        /* background-color: aqua; */

        grid-column: 1/3;
    }

    .body_ .content .but .disable {
        background-color: red;
    }

    .body_ .content .but .quit {
        background-color: rgb(115, 115, 114);
    }


</style>