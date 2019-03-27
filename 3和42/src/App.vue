<template>
  <div id="app">
    <!--登录页面-->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        loginIsShow:true,
        indexIsShow:false,
      }
    },
  }
</script>

<style scoped>
  /*============只希望某个组件用到过渡效果，就在这里引入CSS文件============*/
  /*@import "assets/animate.css";*/
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

</style>
