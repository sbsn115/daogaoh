<template>
  <div id="app">
    <div :class="data_table_class" class="data_table">
      <img src="../../assets/images/paopao.svg" alt="泡泡图">
      <h3>
        <span>{{weekMoneyTitle}}</span>
        <i :class="el_icon"></i>
      </h3>
      <p>{{weekMoney}}</p>
      <h4>{{weekMoneyState}}</h4>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dataStatisticsTable',
    // data() {
    //   // return {
    //   //   数据: '数据值'
    //   // }
    // }
    props: ['weekMoneyTitle', 'weekMoney', 'weekMoneyState', 'data_table_class', 'el_icon']
  }

</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .data_table {
    text-align: left;
    padding: 10px 40px;
    width: 300px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    border-radius: 3px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16);
  }

  .data_table img {
    width: 100%;
    height: 100%;
    position: absolute;
    right: -95px;
    top: 0;
  }

  .data_table h3,
  .data_table p,
  .data_table h4 {
    color: #fff;
    font-weight: normal;
    margin-bottom: 10px;
  }

  .data_table h4 {
    margin: 20px 0 0;
  }

  .data_table h3 span {
    font-size: 20px;
  }

  .data_table h3 i {
    float: right;
    margin-top: 5px;
  }

  .data_table p {
    font-size: 34px;
  }

  .data_table h4 {
    font-size: 14px;
  }

  .data_table_01_class {
    background: linear-gradient(to right, #ffbf96, #fe7096);
  }

  .data_table_02_class {
    background: linear-gradient(to right, #90caf9, #047edf 99%);
    padding:13px 40px;
  }

  .data_table_03_class {
    background: linear-gradient(to right, #84d9d2, #07cdae);
    padding:13px 40px;
  }

</style>
