<template>
  <div id="app">
    <div class="table_topNav1">
      <div class="table_topNavContent_left">个人中心</div>
      <div class="tx" v-for="item in tableData">
        <img src="../../assets/images/photo.png" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
    <div style="margin-top: 20px" v-for="item in tableData">
      <div class="xinxi">
        <div>个人信息</div>
        <div><span class="biaoqian">姓名：</span><span class="xq xq2">{{item.name}}</span></div>
        <div><span class="biaoqian">年龄：</span><span class="xq xq3">{{item.age}}</span></div>
        <div><span class="biaoqian">权限级别：</span><span class="xq xq4">{{item.levels}}</span></div>
        <div><span class="biaoqian">入岗日期：</span><span class="xq xq5">{{item.aenter}}</span></div>
        <div><span class="biaoqian">联系电话：</span><span class="xq xq6">{{item.phone}}</span></div>
        <div><span class="biaoqian">工作住址：</span><span class="xq xq7">{{item.address}}</span></div>
        <editBtn btntext="编辑" btnclass="bianji" @btnEvent="productEdit()"
                 class="editBtn"></editBtn>
      </div>
      <div class="fenge"></div>
      <div class="password">
        <div>修改密码</div>
        <div><span class="biaoqian">原密码：</span><input type="text" placeholder="请输入原密码" class="ymm"></div>
        <div><span class="biaoqian">新密码：</span><input type="password" placeholder="请输入新密码" class="xmm"></div>
        <div><span class="biaoqian">确认密码：</span><input type="password" placeholder="请再次输入密码" class="qrmm"></div>
        <deleteBtn btntext="修改" btnclass="queren" @btnEvent="productDelete()"
                   class="deleteBtn"></deleteBtn>
      </div>
    </div>


  </div>


</template>


<script>
  import '../../assets/lib/jquery-1.12.4'

  var u_id = sessionStorage.getItem('id');
  /*methods*/
  var productsMethods = {

    rowClass(index, row) {
      return 'text-align:center;font-size:12px;color:#684029'
    },
    cellStyle() {
      return 'font-size:12px;color:#684029;padding:0;height:45px'
    },
    productEdit(index, row) {
      console.log(index, row);
      // var des = row.description;
      var name = this.tableData[0].name;
      var age = this.tableData[0].age;
      var phone = this.tableData[0].phone;
      var add = this.tableData[0].address;
      this.$alert('<form action="" id="productForm2" class="mymy">\n' +
        '    <label for="">姓名:</label>\n' +
        '    <input type="text" placeholder="姓名" id="productname" value=' + name + '>\n' +
        '    <br>\n' +
        '    <label for="">年龄:</label>\n' +
        '    <input type="text" placeholder="年龄" id="productage"  value=' + age + '>\n' +
        '    <br>\n' +
        '    <label for="">联系电话:</label>\n' +
        '    <input type="text" placeholder="电话" id="productphone"  value=' + phone + '>\n' +
        '    <br>\n' +
        '    <label for="">工作地址:</label>\n' +
        '    <input type="text" placeholder="地址" id="productadd"  value=' + add + ' >\n' +
        '    <br>\n' +
        '    <span class="promptText"></span>\n' +
        '</form>', '编辑信息', {
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        showConfirmButton: true,
        customClass: 'addProductModel qqw'
      }).then(() => {
        var thisProductTextVal = $("#productForm2 #productText").val();//商品名
        var thisProductPriceVal = $("#productForm2 #productPrice").val();//商品价格
        var thisProductTpVal = $("#productForm2 #productTp option:selected").val();//商品类型
        var thisProductDesVal = $("#productForm2 #productDescription").val();//商品描述
        if (thisProductTextVal == "") {
          this.$message({
            type: 'info',
            message: '请输入商品名'
          });
        } else if (thisProductTextVal != "" && thisProductPriceVal == "") {
          this.$message({
            type: 'info',
            message: '请输入价格'
          });
        } else if (thisProductTextVal != "" && thisProductPriceVal != "" && thisProductTpVal == 0) {
          this.$message({
            type: 'info',
            message: '请选择商品类型'
          });
        } else if (thisProductTextVal != "" && thisProductPriceVal != "" && thisProductTpVal != 0) {
          this.$axios.post("/api/changeadmin.do", {
            val0: $("#productname").val(), val1: $("#productage").val(),
            val2: $("#productphone").val(), val3: $("#productadd").val()
          })
            .then((res) => {
              // console.log(res.data)
              this.$message({
                type: 'info',
                message: '修改成功'
              });
              this.$router.go(0)
            });
        }
      }).catch(() => {
      });

    },
    productDelete(index, row) {
      this.$alert('<div class="del clearfix">\n' +
        '        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAACyklEQVQ4EaWVS0wTYRDHf/3aAqU8VaBASQB5JI0xJIqJBiMHlKMGYzyoicaLXjyZePNgYkw8cPPg0ZNRD8aDB1+JL6JRkChGA0QwBKhAsTxCgS3tOtvSpl12UeJks+33zcx/5vvvzHwOXdcxiR5nbQltgVAvwTfMDRHXKG7Ed4CKNtxFuL0ol8lJlg4z1nKIX2/5cZfxJ2jzZgdnHr42Gs9Q1Y7Xj0NlGmRi6Ux/4Pttfj5iNQwb8k37uQup7iBwAf9hySa9nYE19pi+a4T60GNpte0fyaiokZYrNJ3FsQ6Xwpp6R88lZgXIPp2NwPlVtN2i9lhSkzjw4hhfupnttwJy4Cogp8REzTpsJEj/DWY+JQlRxKNMPGPyhfXRlJvARfZ3G3AWohP+yugDtEVRKuNjjdxHm7Ow/JettWXGn7IwLKkpZnqNZ0s0ZcXQmR9m6r2cTxF8jSYV8B8SXTSKKaapRBFs5dtZBp0flN5QibK01Cc3ddYiRJeQxtpEpOH0eFYTWBgLj6shloPoUQtt9pYLlZu9Y1rFWQnjniW+aTOoHGkmaYV6k7d5KTMjKkfYFMtbJZNDUbYXA9VGhKapHmNsSEnbicNFaQDlVviPUFhrZ2YkXtzE9hac9lR4Kqhsx5mnKKjB32mbmqTccIrdl8kptY7ncFLeyrZdEtUleNSfIPiS3wMW1jJRR+7hLrBtMo+PuuN4q8VXGaco30fzeXKtIgtf4W9MfyS2YhFJsq7rovaokJXAkpdw0XyOhtO48i0cjC2rxpAz+TvYcxUZswlJzUJZyMD4fJOhO0Qm/9bqDjxlxghsvU7ejiSQvDOwZCVFNPrQeCaeszJjnY7cQ76D1Hex8yQubxpoA5ah0YlMEx5g8pUxI+cGia0azSg8FNVReYiaTkoCeGtQzkwgS6yUgZAdjaBrCa5044KQmhRCnZ70ZZEyXf/9AwLpAEG3+zEQAAAAAElFTkSuQmCC">\n' +
        '        <p>确认修改?</p>\n' +
        '    </div>', '提示', {
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        customClass: 'deleteProduct'
      }).then(() => {
        var ymm = $(".ymm").val()
        var xmm = $(".xmm").val()
        var qrmm = $(".qrmm").val()
        if (ymm != this.tableData[0].pwd) {
          this.$message({
            type: 'info',
            message: '密码错误'
          })
        } else if (xmm != qrmm) {
          this.$message({
            type: 'info',
            message: '两次输入不一致'
          })
        }
        else if (xmm == "") {
          this.$message({
            type: 'info',
            message: '密码不能为空'
          })
        } else if (xmm == qrmm && xmm != "" && qrmm != "") {
          this.$axios.post("/api/changepassword.do", {
            xmm: $(".qrmm").val(),
            u_id:u_id
          })
            .then((res) => {
              this.$message({
                type: 'info',
                message: '成功修改'
              });
              $(".ymm").val("");
              $(".xmm").val("");
              $(".qrmm").val("");
              this.$router.go(0);
            })
        }

      }).catch(() => {
      });

    },

  };
  import editBtn from '../button/button'
  import deleteBtn from '../button/button'
  import selectMenu from '../select/select'
  import searchBox from '../search/sousuo'

  import myModel from '../model/model'

  export default {
    name: 'grzx',
    components: {
      editBtn: editBtn,
      deleteBtn: deleteBtn,
      myModel: myModel
    },
    data() {
      return {
        tableData: []
      }
    },
    methods: productsMethods,
    created() {
      /*加载数据库的信息*/
      this.$axios.get("/api/loadAdmin.do",{params:{u_id:u_id}})
        .then((res) => {
          console.log(res.data);
          var productData = res.data.map(function (item) {
            return {
              name: item.a_name,
              age: item.a_age,
              levels: item.a_levels,
              aenter: item.a_enter.split("T")[0],
              phone: item.a_phone,
              address: item.a_address,
              pwd: item.a_pwd
            }
          });
          this.tableData = productData;
        });
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

  .el-table--fit {
    border-radius: 5px;
  }

  .el-table .cell {
    line-height: 12px !important;
  }

  .el-table .cell {
    padding: 0;
  }

  .table_topNav1 {
    height: 110px;
    padding: 30px 12px 0;
    box-sizing: border-box;
    border-bottom: 1px solid black;
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

  .qw {
    width: 11%;
    background-color: rgba(204, 204, 204, 0.1);

  }

  #qq {
    width: 98%;
    height: 5%;
    border-bottom: 1px solid rgb(235, 238, 245);
    line-height: 8%;

  }

  .size {
    color: rgb(104, 64, 41);
    font-size: 14px;
  }

  table {
    width: 98%;
  }

  #xuanze {
    border-radius: 5px;
    width: 70px;
    height: 25px;
    outline: none;
    text-align: center;
  }

  .tx {
    width: 206px;
    height: 31px;
    /*background-color: yellow;*/
    margin-top: 30px;
    text-align: left;
    border: 1px solid white;
  }

  .tx p {
    margin-top: -33px;
    margin-left: 50px;
    color: #684029;
  }

  .xinxi {
    width: 45%;
    color: #684029;
    text-align: left;
    float: left;
  }

  .password {
    width: 54.5%;
    color: #684029;
    text-align: left;
    float: left;
    border-left: 1px solid #684029;
    padding-bottom: 60px;
  }

  .xinxi div {
    height: 42px;
    margin-left: 10px;
  }

  .password div {
    height: 42px;
    margin-left: 20px;
  }

  .biaoqian {
    display: inline-block;
    width: 90px;
    height: 30px;
  }

  .xq {
    display: inline-block;
    width: 150px;
    font-size: 12px;
    border-bottom: 1px solid black;
  }

  .password input {
    width: 300px;
    height: 25px;
    font-size: 12px;
  }

  .qqw label {
    display: inline-block;
    width: 70px;
  }

  .mymy input {
    margin-top: 10px;
  }

  .qqw {
    width: auto !important;
  }
</style>
