<template>
  <div id="app">
    <div id="eCharts2">111</div>
  </div>
</template>

<script>
  export default {
    name: 'eCharts2',
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
        var myChart = this.$echarts.init(document.getElementById('eCharts2'));
        var data = genData(5);
        // 绘制图表
        myChart.setOption({
          title: {
            text: '访问情况统计',
            left: 'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          toolbox: {
            show : true,
            feature : {
              saveAsImage : {show: true}
            }
          },
          legend: {
            bottom: 10,
            left: 'center',
            data: ['直接访问','邮件营销','引擎搜索','联盟广告', '视频广告']
          },
          series : [
            {
              type: 'pie',
              radius : '65%',
              center: ['50%', '50%'],
              selectedMode: 'single',
              data:[
                { value:1548,name: '直接访问'},
                {value:535, name: '邮件营销'},
                {value:510, name: '引擎搜索'},
                {value:634, name: '联盟广告'},
                {value:735, name: '视频广告'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        });

        function genData(count) {
          var nameList = [
            // '赵', '钱', '孙'
          ];
          var legendData = [];
          var seriesData = [];
          var selected = {};
          for (var i = 0; i < 5; i++) {
            name = Math.random() > 0.65
              ? makeWord(4, 1) + '·' + makeWord(3, 0)
              : makeWord(2, 1);
            legendData.push(name);
            seriesData.push({
              name: name,
              value: Math.round(Math.random() * 100000)
            });
            selected[name] = i < 6;
          }

          return {
            legendData: legendData,
            seriesData: seriesData,
            selected: selected
          };

          function makeWord(max, min) {
            var nameLen = Math.ceil(Math.random() * max + min);
            var name = [];
            for (var i = 0; i < nameLen; i++) {
              name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
            }
            return name.join('');
          }
        }
      }
    }
  }


</script>

<style scoped>
  #eCharts2 {
    width: 475px;
    height: 300px;
    background-color: #fff;
    border-radius: 5px;
    padding-top: 10px;
    padding-left: 6px;
    box-sizing: border-box;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  }
</style>
