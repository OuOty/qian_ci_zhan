<template>
    <div class="headBorder">
        <img :src="avatarUrl || defaultAvatar" alt="head" @click="triggerUpload">
        <input type="file" class="file" ref="fileInput" @change="handleFileUpload">
    </div>
</template>
  
<script lang="ts">
    export default {
        name: 'HeadImage'
    }
</script>

<script lang="ts" setup>
    import { ref } from 'vue';

    import headImage from "@/assets/head.svg"; // 引入默认头像

    const defaultAvatar = headImage;
    const fileInput = ref<HTMLInputElement | null>(null);
    const uploadedFile = ref<File | null>(null)
    const avatarUrl = ref<string | null>(null);
    const triggerUpload = () => {
        fileInput.value?.click()
    }

    // 处理文件上传逻辑
    const handleFileUpload = (event: Event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file && file.type.startsWith("image/")) {
        uploadedFile.value = file; // 保存文件
        avatarUrl.value = URL.createObjectURL(file); // 生成预览 URL
      }
      else{
        alert("请上传图片文件！")
      }
    };


</script>
  
  
<style>
    .headBorder {
        /* width: 1000px;
        height: 1000px; */
        /* background-color: aqua; */
        margin-top: 10px;
    }

    .headBorder img {
        height: 60px;
        width: 60px;
        cursor: pointer;
        border-radius: 50%;
        object-fit: cover;
    }

    .file {
        display: none;
    }

</style>