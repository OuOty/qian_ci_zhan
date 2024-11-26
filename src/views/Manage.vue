<template>
    
    <div class="head">
        <img src="@/assets/home.svg" alt="" class="back" @click="back">
        <img src="@/assets/logo.png" alt="">
        <p>千词斩-后台管理</p>
    </div>
    <div class="body">
            <!-- <div class="left-nav"> -->
        <el-row class="tac">
            <el-col :span="25">
                <el-menu
                    active-text-color="#ffd04b"
                    background-color="#545c64"
                    class="el-menu-vertical-demo"
                    default-active="2"
                    text-color="#fff"
                    @open="handleOpen"
                    @close="handleClose"
                    router="ture" 
                >
                    <el-menu-item index="/manage/">
                        <el-icon><icon-menu /></el-icon>
                        <span>管理员首页</span>
                    </el-menu-item>
                    
                    
                


                    <el-sub-menu index="2">
                        <template #title>
                            <el-icon><User /></el-icon>
                            <span>用户管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/manage/manageSelectUser">查询用户</el-menu-item>
                            <el-menu-item index="/manage/manageBanUser">已封禁用户</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>

                    <el-menu-item index="3">
                        <el-icon><Folder /></el-icon>
                        <span>单词管理</span>
                    </el-menu-item>

                    
                    <el-menu-item index="4">
                    <el-icon><setting /></el-icon>
                    <span>Navigator Four</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
            <!-- </div>     -->

        <div class="right-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<style scoped>
    .head {
        height: 8vh;
        width: 100vw;
        background-color: #68727b;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .head .back {
        position: absolute;
        left: 20px;
        width: 40px;
        cursor: pointer;
    }

    .head img {
        width: 50px;
        margin-right: 15px;
    }
    .head p {
        color: white;
    }

    .body {
        width: 100vw;
        height: 92vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
        background-color: #545C64;
    }

    /* .body .left-nav {
        width: 15%;
        height: 100%;
        background-color: aqua;
    } */

    .right-content {
        flex-grow: 1;
        background-color:aliceblue;
        height: 100%;
    }

</style>

<script lang="ts" setup>
    import {
        Document,
        Menu as IconMenu,
        Location,
        Setting,
    } from '@element-plus/icons-vue'
    import router from '@/router';
    const handleOpen = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }

    const back = () => {
        router.replace('/')
    }
</script>

<script lang="ts">
    export default {
        name: 'Manage'
    }
</script>