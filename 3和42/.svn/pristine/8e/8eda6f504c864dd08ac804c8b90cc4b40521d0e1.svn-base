<template>
  <div id="app" style="background: #f2edf3;box-shadow: none;padding: 0">
    <div class="data_statistics_table">
      <div class="data_statistics_table_01">
        <data_table el_icon="el-icon-star-off" data_table_class="data_table_01_class" weekMoneyTitle="每周销量"
                    weekMoney="20,000元" weekMoneyState="增加8%"></data_table>
      </div>
      <div class="data_statistics_table_02">
        <data_table el_icon="el-icon-edit-outline" data_table_class="data_table_02_class" weekMoneyTitle="每月订单"
                    weekMoney="2018" weekMoneyState="增加5%"></data_table>
      </div>
      <div class="data_statistics_table_03">
        <data_table el_icon="el-icon-bell" data_table_class="data_table_03_class" weekMoneyTitle="在线访问"
                    weekMoney="10,000" weekMoneyState="增加2%"></data_table>
      </div>

    </div>
    <div class="data_statistics_pic clearfix">
      <div class="data_statistics_pic_left">
        <eCharts></eCharts>
      </div>
      <div class="data_statistics_pic_right">
        <eCharts_bin></eCharts_bin>
      </div>
    </div>
  </div>
</template>

<script>
  import data_table from './dataStatisticsTable'
  import eCharts from '../echarts/echarts'
  import eCharts_bin from '../echarts/echarts_bin'

  export default {
    name: 'myData',
    // data() {
    //     return {
    //         数据: '数据值'
    //     }
    // },
    components: {
      data_table: data_table,
      eCharts: eCharts,
      eCharts_bin: eCharts_bin
    }
  }

</script>

<style scoped>
  /*清除浮动*/
  .clearfix:after {
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .data_statistics_table {
    height: 140px;
  }

  .data_statistics_table_01,
  .data_statistics_table_02,
  .data_statistics_table_03 {
    position: absolute;
    top: 0;
  }
  .data_statistics_table_02{
    left: 50%;
    transform: translateX(-50%);
  }

  .data_statistics_table_03 {
    right: 0;
  }

  .data_statistics_pic {
    margin-top: 55px;
  }

  .data_statistics_pic_left {
    float: left;
  }

  .data_statistics_pic_right {
    margin-left: 50px;
    float: right;
  }

</style>
