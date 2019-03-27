<template>
  <div id="app">
    <div id="eCharts">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'eCharts',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化eCharts实例
        var myChart = this.$echarts.init(document.getElementById('eCharts'))
        // 绘制图表
        myChart.setOption({
          color: ['rgba(44,148,230,.7)','rgba(114,70,45,.7)'],
          title : {
            text: '11月人气销量',
          },
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            data:['浅草','芒果慕斯']
          },
          toolbox: {
            show : true,
            feature : {
              saveAsImage : {show: true}
            }
          },
          calculable : true,
          xAxis : [
            {
              type : 'category',
              data : ['第1周','第2周','第3周','第4周']
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'浅草',
              type:'bar',
              data:[20, 49, 70, 102],
              markPoint : {
                data : [
                  {type : 'max', name: '最大值'},
                  {type : 'min', name: '最小值'}
                ]
              },
              markLine : {
                data : [
                  {type : 'average', name: '平均值'}
                ]
              }
            },
            {
              name:'芒果慕斯',
              type:'bar',
              data:[26, 59, 90, 114],
              markPoint : {
                data : [
                  {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                  {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                ]
              },
              markLine : {
                data : [
                  {type : 'average', name : '平均值'}
                ]
              }
            }
          ]
        });
      }
    }
  }


</script>

<style scoped>
  #eCharts {
    width: 475px;
    height: 300px;
    background-color: #fff;
    border-radius: 5px;
    padding-top: 20px;
    padding-left: 6px;
    box-sizing: border-box;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  }
</style>
