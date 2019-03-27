<template>
  <div id="app" style="height: 100%;">
    <el-container style="height: 100%;">
      <el-header height="70px" style="background-color: #fff;">
        <topNav></topNav>
      </el-header>
      <el-container style="height: 89%;">
        <el-aside width="260px" style="height: 100%;">
          <aside1></aside1>
        </el-aside >
        <el-main>
          <router-view id="routerView"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import aside1 from './aside/menu'
  import topNav from './topnav/topnav'

  export default {
    name: 'index',
    data() {
      return {}
    },
    components:{
      aside1:aside1,
      topNav:topNav
    }
  }

</script>

<style scoped>
  #app {
    height: 100%;
  }
  #routerView {
    background-color: #fff;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1) ;
    padding: 0 40px;
    overflow: auto;
    position: relative;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    height: 70px;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #fff;
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 200px;*/
  }

  .el-main {
    background-color: #F2EDF3;
    color: #333;
    text-align: center;
    padding: 44px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }


</style>
