<script setup lang="ts">
import { globalLanguage } from '@/language';
import zhCN from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';
const language = computed(() => {
  return globalLanguage.value === 'zh-CN' ? zhCN : en;
});
</script> 

<template>
  <el-config-provider :locale="language">
    <router-view />
  </el-config-provider>
</template>

<style scoped />
