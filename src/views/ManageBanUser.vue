<template>
    
    <div class="body">
        <div class="selectPut">
            <input type="text" placeholder="请输入用户id进行查询，支持模糊查询" :value="inputValue">
            <button @click="onSelect">查询</button>
        </div>
        <div class="content">
            <NotUserTable></NotUserTable>
        </div>
    </div>
</template>

<script setup lang="ts">
    import NotUserTable from '@/components/NotUserTable.vue';
import SelectDate from '@/components/SelectDate.vue';

    import { ref } from 'vue';

    const inputValue = ref('')
    const onSelect = () => {

    }

</script>

<script lang="ts">
    export default {
        name: 'ManageBanUser'
    }
</script>

<style scoped>
    .body {
        width: 100%;
        height: 100%;
        background-color:aliceblue;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
    }

    .selectPut {
        width: 100%;
        height: 200px;
        /* background-color: aqua; */
        display: flex;
        flex-direction: row;
        justify-content:space-around;
        align-items: center;
    }

    .selectPut input {
        width: 80%;
        height: 50px;
        padding-left: 15px;
        outline: none;
    }

    .selectPut button {
        width: 100px;
        height: 50px;
    }

    .content {
        width: 100%;
        border-radius: 15px;
        overflow: hidden;
    }
</style>