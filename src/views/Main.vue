<template>
  <el-container style="height: 100%">
    <el-aside width="auto"><common-aside></common-aside></el-aside>
    <el-container>
      <el-header><common-header></common-header></el-header>
      <common-tab></common-tab>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
//导入组件并注册
import CommonHeader from '../components/CommonHeader'
import CommonAside from '../components/CommonAside'
import CommonTab from '../components/CommonTab'
export default {
  components: {
    CommonHeader,
    CommonAside,
    CommonTab
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #ffcd00;
}
.el-main {
  padding-top: 0;
}
</style>
