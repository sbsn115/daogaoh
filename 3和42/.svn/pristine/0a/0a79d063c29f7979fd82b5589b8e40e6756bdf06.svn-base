<template>
  <div id="app">
    <button :class="btnclass" @click="btnEvent">{{btntext}}</button>
  </div>
</template>

<script>
  export default {
    name: "mybtn",
    data: function () {
      return {
        count: 0
      }
    },
    methods: {
      btnEvent() {
        this.$emit('btnEvent');
      }
    },

    props: ['btntext', 'btnclass']


  }
</script>

<style scoped>
  #app {
    line-height: 44.5px;
  }

  /*确认按钮*/
  .queren {
    padding: 0 10px;
    height: 25px;
    border: 1px solid #07CDAE;
    border-radius: 5px;
    background-color: white;
    color: #07CDAE;
    outline: none;
    cursor: pointer;
  }

  .queren:hover {
    background-image: -webkit-linear-gradient(0deg, rgba(132, 217, 210, 0.81), rgba(7, 205, 174, 0.81));
    color: white;
  }

  /*新增*/
  .xinzeng {
    padding: 0 10px;
    height: 25px;
    border: 1px solid #B66DFF;
    border-radius: 5px;
    background-color: white;
    color: #B66DFF;
    outline: none;
    cursor: pointer;
  }

  .xinzeng:hover {
    background-image: -webkit-linear-gradient(0deg, rgba(218, 140, 255, 0.8), rgba(182, 109, 255, 0.8));
    color: white;
  }

  /*编辑*/
  .bianji {
    padding: 0 10px;
    height: 25px;
    border: 1px solid #868E96;
    border-radius: 5px;
    background-color: white;
    color: #868E96;
    outline: none;
    cursor: pointer;
  }

  .bianji:hover {
    background-image: -webkit-linear-gradient(0deg, rgba(216, 216, 216, 0.81), rgba(134, 142, 150, 0.8));
    color: white;
  }

  /*取消*/
  .quxiao {
    padding: 0 10px;
    height: 25px;
    border: 1px solid #DAE0E5;
    border-radius: 5px;
    background-color: white;
    color: #DAE0E5;
    outline: none;
    cursor: pointer;
  }

  .quxiao:hover {
    background-image: -webkit-linear-gradient(0deg, rgb(216, 216, 216), rgb(216, 216, 216));
    color: white;
  }

  /*查看*/
  .chakan {
    padding: 0 10px;
    height: 25px;
    border: 1px solid #0099FF;
    border-radius: 5px;
    background-color: white;
    color: #0099FF;
    outline: none;
    cursor: pointer;
  }

  .chakan:hover {
    background-image: -webkit-linear-gradient(0deg, rgba(0, 204, 255, 0.8), rgba(0, 153, 255, 0.8));
    color: white;
  }

  /*删除*/
  .shanchu {
    height: 25px;
    padding: 0 10px;
    border: 1px solid #FE7096;
    border-radius: 5px;
    background-color: white;
    color: #FE7096;
    outline: none;
    cursor: pointer;
  }

  .shanchu:hover {
    background-image: -webkit-linear-gradient(0deg, rgba(255, 191, 150, 0.8), rgba(254, 112, 150, 0.81));
    color: white;
  }

  /*全选*/
  .quanxuan {
    padding: 0 10px;
    height: 25px;
    border: 1px solid #047EDF;
    border-radius: 5px;
    background-color: white;
    color: #047EDF;
    cursor: pointer;
  }

  .quanxuan:hover {
    background-image: -webkit-linear-gradient(0deg, rgba(144, 202, 249, 0.8), rgba(4, 126, 223, 0.81));
    color: white;
  }

</style>
