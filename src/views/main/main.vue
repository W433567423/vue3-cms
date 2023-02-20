<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '200px'">
        <nav-nume :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @foldChange="foldChange" />
        </el-header>
        <el-main class="page-content"><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import navNume from '@/components/nav-menu'
import navHeader from '@/components/nav-header'
</script>
<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .main-content,
  .page {
    height: 100%;
  }
  .page-content {
    height: calc(100%-48px);
  }

  .el-header,
  .el-footer {
    display: flex;
    color: #333;
    text-align: center;
    align-items: center;
  }
  .el-header {
    height: 48px !important;
  }

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    transition: width 0.3s linear;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
