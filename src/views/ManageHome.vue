<template>
    <div class="body">
        <div class="head">
            Hello,manager!
        </div>

        <div class="content">
            <div>单词库总数<p>{{ word_number }}</p></div>
            <div>用户总数<p>{{ user_number }}</p></div>
            <div>封禁用户总数<p>{{ usered_number }}</p></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

    const word_number = ref(0)
    const user_number = ref(0)
    const usered_number = ref(0)

</script>

<script lang="ts">

</script>

<style scoped>
    .body {
        background-color:aliceblue;
        display: flex;
        flex-direction: column;
        justify-content: start;
        width: 100%;
        padding-left: 30px;
    }

    .head {
        height: 70px;
        padding: 15px;
        font-size: 30px;
        font-family: 幼圆;
        font-weight:bolder;
    }

    .content {
        display: grid;
        /* background-color: aqua; */
        height: 100%;
        width: 100%;
        grid-template-columns: repeat(4,1fr);
        gap: 40px;
        padding: 15px;
    }

    .content div {
        background-color: #bdc3c9;
        height: 200px;
        border-radius: 15px;
        transition: all 0.2s ease-in-out;
        padding: 15px;
    }

    .content div p {
        display: flex;
        width: 100%;
        height: 100%;
        font-size: 40px;
    }

    .content div:hover {
        background-color: #818588;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
    }
</style>