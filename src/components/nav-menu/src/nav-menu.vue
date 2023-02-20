<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="logo" class="img" />
      <span class="title">CMS后台管理系统</span>
    </div>
    <el-menu default-active="2" class="el-menu-vertical">
      <!-- 一级菜单 -->
      <template v-for="item in userMenus" :key="item.id">
        <!-- 有二级菜单 -->
        <template v-if="item.children">
          <el-sub-menu>
            <template #title>
              <i v-if="item.icon">
                <el-icon> <component :is="item.icon" /></el-icon>
              </i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <!-- 有三级菜单 -->
              <template v-if="subitem.children">
                <el-sub-menu>
                  <template #title>
                    <i v-if="subitem.icon">
                      <el-icon> <component :is="subitem.icon" /></el-icon>
                    </i>
                    <span>{{ subitem.name }}</span>
                  </template>
                  <template
                    v-for="sucitem in subitem.children"
                    :key="sucitem.id"
                  >
                    <!-- 四级菜单 -->
                    <el-menu-item>
                      <i v-if="sucitem.icon">
                        <el-icon> <component :is="sucitem.icon" /></el-icon>
                      </i>
                      <span>{{ sucitem.name }}</span>
                    </el-menu-item>
                  </template>
                </el-sub-menu>
              </template>
              <!-- 无三级菜单 -->
              <template v-if="subitem.children == null">
                <el-menu-item>
                  <i v-if="item.icon">
                    <el-icon> <component :is="item.icon" /></el-icon>
                  </i>
                  <span>{{ subitem.name }}</span>
                </el-menu-item></template
              >
            </template>
          </el-sub-menu>
        </template>
        <!-- 无二级菜单 -->
        <template v-else-if="item.children == null">
          <el-menu-item>
            <i v-if="item.icon">
              <el-icon> <component :is="item.icon" /></el-icon>
            </i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const userMenus = computed(() => store.state.login.userMenus)
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 36px;
    padding: 6px 5px 4px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .el-sub-menu {
    background-color: #001529 !important;
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #102d47 !important;
    }
  }
  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }
  .el-menu-item:hover {
    color: #fff !important;
  }
  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100%-46px);
}
</style>
