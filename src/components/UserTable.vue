<template>
    <SelectDate v-if="isShow" :user_id="currentUserId" :quitWindow="quitWindow"></SelectDate>
    <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="user_id" label="用户id" width="180"/>
        <el-table-column prop="user_name" label="用户名" width="180" />
        <el-table-column prop="user_kubi" label="酷币数量" width="180"/>
        <el-table-column prop="user_not_use" label="封禁时间" width="180"/>
        <el-table-column  label="操作">
            <template #default="{ row }">
                <div class="operate">
                    <button class="but fengjin" @click="onDisable(row.user_id)">封禁</button>
                    <button class="but distroy" @click="onDistroy(row.user_id)">注销</button>
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>

<style scoped>
    .operate {
        display: flex;
        flex-direction: row;
    }

    .operate .but {
        width: 50px;
        height: 30px;
        margin-right: 10px;
    }

    .operate .distroy {
        background-color: red;
    }
</style>

<script lang="ts" setup>
    import { ref } from 'vue';
    import SelectDate from './SelectDate.vue';


    const isShow = ref(false)
    const currentUserId = ref('')
    const onDisable = (user_id:string) => {
        isShow.value = true
        currentUserId.value = user_id
    }

    const quitWindow = () => {
        isShow.value = false
    }

    const onDistroy = (user_id:string) => {
        confirm(`危险操作：确定注销ID为（${user_id}）的用户吗？`)
    }

    const tableData = ref([
    {
        user_id: '1991572365',
        user_name: 'Tom',
        user_kubi: 60,
        user_not_use: 0,
    },
    {
        user_id: '1991572365',
        user_name: 'Tom',
        user_kubi: 60,
        user_not_use: 0,
    },
    {
        user_id: '1991365',
        user_name: 'Tom',
        user_kubi: 60,
        user_not_use: 0,
    },
    {
        user_id: '1991572365',
        user_name: 'Tom',
        user_kubi: 60,
        user_not_use: 0,
    },
    {
        user_id: '1991572365',
        user_name: 'Tom',
        user_kubi: 60,
        user_not_use: 0,
    },
    ])
</script>

<script lang="ts">
    export default {
        name: 'UserTable'
    }
</script>