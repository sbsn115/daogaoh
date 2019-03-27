<template>
  <div id="app">

    <div style="height: 90px; border-bottom:1px solid grey;">
      <p class="p_title">发布公告</p>
    </div>
    <div class="demo-input-suffix">
      <p class="g">公告名称：</p>
      <el-input
        placeholder="请输入公告名称"
        v-model="input21"
        class="inp"
        ref="input1">
      </el-input>
    </div>
    <div class="demo-input-suffix">
      <p class="g">公告内容：</p>
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="textarea"
        class="tex"
        resize="none"
        :rows="6"
      >
      </el-input>
      <el-row class="an">
        <el-button type="success" v-bind:disabled="isAble" :disabled="isdisabledFn" @click="fabu" class="faBu">发布</el-button>
      </el-row>
    </div>
  </div>


</template>

<script>
  //  import {formatDate} from '../../../date.js';
  import '../../assets/lib/jquery-1.12.4'

  var bulletinMethods = {
    fabu() {
      let name = this.input21;
      let text = this.textarea;
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;//js中是从0开始所以要加1
      let day = date.getDate();
      let presentTime = year + '-' + month + '-' + day;
//        let month1=date.getMonth()+2;
      let year1 = year;
      let month1 = month;
      let day1 = day + 15;
      let shixiaoTime = year1 + '-' + month1 + '-' + day1;
      this.$axios.get("/api/addBulletin.do", {params: {name: name, text: text, start: presentTime, end: shixiaoTime}})
        .then((res) => {
          this.$alert('<div class="shanchu clearfix">\n' +
            '        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAACyklEQVQ4EaWVS0wTYRDHf/3aAqU8VaBASQB5JI0xJIqJBiMHlKMGYzyoicaLXjyZePNgYkw8cPPg0ZNRD8aDB1+JL6JRkChGA0QwBKhAsTxCgS3tOtvSpl12UeJks+33zcx/5vvvzHwOXdcxiR5nbQltgVAvwTfMDRHXKG7Ed4CKNtxFuL0ol8lJlg4z1nKIX2/5cZfxJ2jzZgdnHr42Gs9Q1Y7Xj0NlGmRi6Ux/4Pttfj5iNQwb8k37uQup7iBwAf9hySa9nYE19pi+a4T60GNpte0fyaiokZYrNJ3FsQ6Xwpp6R88lZgXIPp2NwPlVtN2i9lhSkzjw4hhfupnttwJy4Cogp8REzTpsJEj/DWY+JQlRxKNMPGPyhfXRlJvARfZ3G3AWohP+yugDtEVRKuNjjdxHm7Ow/JettWXGn7IwLKkpZnqNZ0s0ZcXQmR9m6r2cTxF8jSYV8B8SXTSKKaapRBFs5dtZBp0flN5QibK01Cc3ddYiRJeQxtpEpOH0eFYTWBgLj6shloPoUQtt9pYLlZu9Y1rFWQnjniW+aTOoHGkmaYV6k7d5KTMjKkfYFMtbJZNDUbYXA9VGhKapHmNsSEnbicNFaQDlVviPUFhrZ2YkXtzE9hac9lR4Kqhsx5mnKKjB32mbmqTccIrdl8kptY7ncFLeyrZdEtUleNSfIPiS3wMW1jJRR+7hLrBtMo+PuuN4q8VXGaco30fzeXKtIgtf4W9MfyS2YhFJsq7rovaokJXAkpdw0XyOhtO48i0cjC2rxpAz+TvYcxUZswlJzUJZyMD4fJOhO0Qm/9bqDjxlxghsvU7ejiSQvDOwZCVFNPrQeCaeszJjnY7cQ76D1Hex8yQubxpoA5ah0YlMEx5g8pUxI+cGia0azSg8FNVReYiaTkoCeGtQzkwgS6yUgZAdjaBrCa5044KQmhRCnZ70ZZEyXf/9AwLpAEG3+zEQAAAAAElFTkSuQmCC">\n' +
            '        <p>确认发布?</p>\n' +
            '    </div>', '提示', {
            dangerouslyUseHTMLString: true,
            showCancelButton: true,
            customClass: 'shanzeng'
          }).then(() => {
            this.$router.push({path: '/see'})
          });
        });
    }
  };

  export default {
    name: 'release',
    data() {
      return {
        input21: '',
        textarea: '',
        isAble: true,
        tableData: []
      }
    },
    methods: bulletinMethods,
    computed: {
      isdisabledFn() {
        if (this.textarea.length > 0) {
          return this.isAble = false;
        }
        else {
          return this.isAble = true;
        }
      }
    },
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .p_title {
    font-size: 18px;
    padding-top: 34px;
    text-align: left;
    color: #684029;
  }

  .g {
    padding-top: 40px;
    font-size: 14px;
    text-align: left;
  }

  .inp {
    display: inline-block;
    width: 140px;
    position: absolute;
    left: 120px;
    top: 126px;
  }

  .el-input__inner{
    height: 30px;
  }

  .tex {
    width: 750px;
    height: 138px;
    position: absolute;
    left: 120px;
    top: 194px;
  }

  textarea {
    height: 140px;
  }

  .an {
    position: absolute;
    top: 350px;
    left: 785px;
    width: 100px;
  }
  .faBu {
    padding: 8px 18px;
  }
</style>
