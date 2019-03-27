<template>
  <div id="app">
    <div class="table_topNav">
      <div class="table_topNavContent_left">权限管理</div>
      <div class="table_topNavContent_right">
        <div class="selectMenu">
          <select name="munu" id="xuanze" @click="acc">
            <option value="1"> 管理员</option>
            <option value="2"> 店长</option>

            <option value="3"> 员工</option>

          </select>
        </div>
        <!--<div class="searchBox">-->
        <!--<searchBox placeH="请输入商品名/ID"></searchBox>-->
        <!--</div>-->
        <div class="addBtn">
          <addBtn btntext="保存" btnclass="xinzeng" style="margin: -8px 0 0 5px;float: left;"
                  @btnEvent="addProduct"></addBtn>

          <!--<deleteBtn btntext="批量删除" btnclass="shanchu" @btnEvent="productDelete"-->
                     <!--style="margin: -5px 0 0 10px;float: right;"></deleteBtn>-->
        </div>
      </div>
    </div>
    <div id="qq">
      <ul>
        <li class="fl size">权限分类</li>
        <li class="ck size">查看</li>
        <li class="xz size">新增</li>
        <li class="bj size">编辑</li>
        <li class="sc size">删除</li>
      </ul>
    </div>
    <table>
      <tbody>
      <tr >
        <td class="qw" rowspan="4">普通权限</td>
        <td ><fxk qxtext="商品管理" class="one" checkAll="true" mycheck="checked"></fxk></td>

      </tr>
      <tr >
        <!--<td class="qw"></td>-->
        <td><fxk qxtext="客户管理"></fxk></td>

      </tr>
      <tr >
        <!--<td class="qw"></td>-->
        <td><fxk qxtext="员工管理" mycheckAll="true"></fxk></td>

      </tr>
      <tr >
        <!--<td class="qw"></td>-->
        <td><fxk qxtext="公告管理" mycheck=""></fxk></td>

      </tr>
      <tr >
        <td class="qw" rowspan="2">高级权限</td>
        <td><fxk qxtext="角色管理"></fxk></td>

      </tr>
      <tr >
        <!--<td class="qw"></td>-->
        <td><fxk qxtext="企业管理"></fxk></td>

      </tr>
      <tr >
        <td class="qw" rowspan="2">新增权限</td>
        <td> <fxk qxtext="店面管理"></fxk></td>

      </tr>
      <tr >
        <!--<td class="qw">新增权限</td>-->
        <td> <fxk qxtext="购物管理"></fxk></td>

      </tr>

      </tbody>

    </table>

  </div>


</template>


<script>


  var productsMethods = {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    rowClass(index, row) {
      return 'text-align:center;font-size:12px;color:#684029'
    },
    cellStyle() {
      return 'font-size:12px;color:#684029;padding:0;height:45px'
    },
    acc(){
    var a=document.getElementById("xuanze").value
      var b=document.getElementsByClassName("one")
      console.log(a)
      if (a==3){
      b.setAttribute("checkAll",true)
      }

    },
    addProduct() {
      this.$alert('<div class="del clearfix">\n' +
        '        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAACyklEQVQ4EaWVS0wTYRDHf/3aAqU8VaBASQB5JI0xJIqJBiMHlKMGYzyoicaLXjyZePNgYkw8cPPg0ZNRD8aDB1+JL6JRkChGA0QwBKhAsTxCgS3tOtvSpl12UeJks+33zcx/5vvvzHwOXdcxiR5nbQltgVAvwTfMDRHXKG7Ed4CKNtxFuL0ol8lJlg4z1nKIX2/5cZfxJ2jzZgdnHr42Gs9Q1Y7Xj0NlGmRi6Ux/4Pttfj5iNQwb8k37uQup7iBwAf9hySa9nYE19pi+a4T60GNpte0fyaiokZYrNJ3FsQ6Xwpp6R88lZgXIPp2NwPlVtN2i9lhSkzjw4hhfupnttwJy4Cogp8REzTpsJEj/DWY+JQlRxKNMPGPyhfXRlJvARfZ3G3AWohP+yugDtEVRKuNjjdxHm7Ow/JettWXGn7IwLKkpZnqNZ0s0ZcXQmR9m6r2cTxF8jSYV8B8SXTSKKaapRBFs5dtZBp0flN5QibK01Cc3ddYiRJeQxtpEpOH0eFYTWBgLj6shloPoUQtt9pYLlZu9Y1rFWQnjniW+aTOoHGkmaYV6k7d5KTMjKkfYFMtbJZNDUbYXA9VGhKapHmNsSEnbicNFaQDlVviPUFhrZ2YkXtzE9hac9lR4Kqhsx5mnKKjB32mbmqTccIrdl8kptY7ncFLeyrZdEtUleNSfIPiS3wMW1jJRR+7hLrBtMo+PuuN4q8VXGaco30fzeXKtIgtf4W9MfyS2YhFJsq7rovaokJXAkpdw0XyOhtO48i0cjC2rxpAz+TvYcxUZswlJzUJZyMD4fJOhO0Qm/9bqDjxlxghsvU7ejiSQvDOwZCVFNPrQeCaeszJjnY7cQ76D1Hex8yQubxpoA5ah0YlMEx5g8pUxI+cGia0azSg8FNVReYiaTkoCeGtQzkwgS6yUgZAdjaBrCa5044KQmhRCnZ70ZZEyXf/9AwLpAEG3+zEQAAAAAElFTkSuQmCC">\n' +
        '        <p>确认修改?</p>\n' +
        '    </div>', '提示', {
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        customClass: 'deleteProduct'
      }).catch(() => {
      });
    },

    lookOver(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    }
    ,
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }


  };
  import lookBtn from '../button/button'
  import editBtn from '../button/button'
  import deleteBtn from '../button/button'
  import selectMenu from '../select/select'
  import searchBox from '../search/sousuo'
  import addBtn from '../button/button'
  import fxk from '../qxgl/qxglfxk'

  export default {
    name: 'qxgl',
    components: {
      lookBtn: lookBtn,
      editBtn: editBtn,
      deleteBtn: deleteBtn,
      selectMenu: selectMenu,
      searchBox: searchBox,
      addBtn: addBtn,
      fxk:fxk
    },
    data() {
      return {
        currentPage: 1,
        pagesize: 7,
        total:0,
        tableData: []
      }
    },
    methods: productsMethods,
    created() {

      /*加载数据库的商品*/
      this.$axios.get("/api/loadGoods.do")
        .then((res) => {
          // console.log(res.data)

          var productData = res.data.map(function (item) {
            return {
              id: item.goods_id,
              name: item.goods_name,
              imgSrc1: item.goods_img,
              price: item.goods_price,
              description: item.goods_description
            }
          });
          this.tableData = productData;
          this.total = this.tableData.length;

        })
    }

  }

</script>

<style>
  @import "../../assets/tankuang-1.css";
  /*清除浮动*/
  .clearfix:after {
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .el-checkbox__inner {
    border: 1px solid rgba(74, 74, 74, 0.65) !important;
  }

  .el-table--fit {
    border-radius: 5px;
  }

  .el-table .cell {
    line-height: 12px !important;
  }

  .el-table .cell {
    padding: 0;
  }

  .table_topNav {
    height: 75px;
    padding: 30px 12px 0;
    box-sizing: border-box
  }

  .table_topNavContent_left {
    float: left;
    font-size: 18px;
    color: #684029;
  }

  .table_topNavContent_right {
    float: right;
    padding-right: 2%;
  }

  .selectMenu,
  .searchBox,
  .addBtn {
    float: left;
    margin-left: 20px;
  }

  .pageNumber {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
  }

  .lookBtn, .editBtn, .deleteBtn {
    float: left;
  }

  .editBtn, .deleteBtn {
    margin-left: 5%;
  }

  @media (max-width: 1335px) {
    .table_topNavContent_right,
    .chakan,
    .bianji,
    .shanchu {
      display: none;
    }
  }

  .btnBox {
    width: 90%;
    margin: 0 auto;
    padding-left: 7%;
  }

  @media (max-height: 590px) {
    .btnBox {
      width: 90%;
      margin: 0 auto;
      padding-left: 3%;
    }

    .pageNumber {
      top: 28px;
      left: 24%;
    }
  }
  .qw{
    width: 11%;
    background-color: rgba(204, 204, 204, 0.1);

  }
  #qq li{
    float: left;
    list-style: none;

  }
  .fl{
    margin-left: 20%;
  }
  .ck{
    margin-left: 13%;
  }
  .xz{
    margin-left: 12.4%;
  }
  .bj{
    margin-left: 12.5%;
  }
  .sc{
    margin-left: 13%;
  }
  td{
    border-bottom: 1px solid rgb(235,238,245);
  }
  tr{
    height: 40px;

  }
  #qq{
    width: 98%;
    height: 5%;
    /*border-top:1px solid black ;*/
    border-bottom:1px solid rgb(235,238,245) ;
    line-height: 8%;

  }
  .size{
    color: rgb(104, 64, 41);
    font-size: 14px;
  }
  table{
    width: 98%;
  }
  #xuanze{
    border-radius: 5px;
    width: 70px;
    height: 25px;
    outline: none;
    text-align: center;
  }

</style>
