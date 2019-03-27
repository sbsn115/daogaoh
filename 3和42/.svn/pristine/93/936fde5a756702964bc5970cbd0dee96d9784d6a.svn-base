<template>
  <div id="app">
    <div class="table_topNav">
      <div class="table_topNavContent_left">购物车表</div>
      <div class="table_topNavContent_right">
        <div class="searchBox">
          <searchBox placeH="输入商品名/用户名/商品ID" @getSearchText="filterSearchText"></searchBox>
          <!--:searchText="searchText"-->
        </div>
      </div>
    </div>
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      :cell-style="cellStyle"
      :header-cell-style="rowClass"
      align="center"
      style="width: 100% ;table-layout:fixed">

      <!--序号-->
      <el-table-column
        type="index"
        align="center"
        :index="1">
      </el-table-column>

      <!--用户ID-->
      <el-table-column
        align="center"
        label="用户ID"
        min-width="40">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.u_id }}</span>
        </template>
      </el-table-column>

      <!--用户姓名-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="用户姓名"
        min-width="50">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.u_name }}</span>
        </template>
      </el-table-column>

      <!--商品ID-->
      <el-table-column
        align="center"
        label="商品ID"
        min-width="35">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.goods_id }}</span>
        </template>
      </el-table-column>
      <!--商品名-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="商品名"
        min-width="70">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.goods_name }}</span>
        </template>
      </el-table-column>

      <!--商品规格-->
      <el-table-column
        align="center"
        label="商品规格"
        min-width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.goods_type }}</span>
        </template>
      </el-table-column>

      <!--商品数量-->
      <el-table-column
        align="center"
        label="商品数量"
        min-width="40">
        <template slot-scope="scope">
          <span>{{ scope.row.goods_num }}</span>
        </template>
      </el-table-column>

      <!--商品价格-->
      <el-table-column
        align="center"
        label="商品总价(单位/元)"
        min-width="80">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.goods_allPrice }}</span>
        </template>
      </el-table-column>

      <!--操作-->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div class="btnBox2 clearfix">
            <!--查看-->

            <lookBtn btntext="查看" btnclass="chakan" @btnEvent="lookOver(scope.$index, scope.row)"
                     class="lookBtn2"></lookBtn>
            <!--编辑-->
            <editBtn btntext="编辑" btnclass="bianji" @btnEvent="productEdit(scope.$index, scope.row)"
                     class="editBtn2"></editBtn>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="pageNumber">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :pager-count="5"
        :current-page.sync="currentPage"
        :page-size="pagesize"
        prev-text="<"
        next-text=">"
        layout="total, prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
  </div>


</template>

<script>
  import '../../assets/lib/jquery-1.12.4'

  /*methods*/
  var productsMethods = {

    changeImg(event) {
      this.file = event.target.files[0];
      this.goods_id = event.target.getAttribute('goods_id');
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      let formData = new FormData();
      formData.append('file', this.file);
      formData.append('goods_id', this.goods_id);
      this.$axios.post("/api/changeImg.do", formData, config)
        .then((res) => {
          // console.log(res.data);
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
            });
        })

    },

    rowClass(index, row) {
      return 'text-align:center;font-size:12px;color:#684029'
    },
    cellStyle() {
      return 'font-size:12px;color:#684029;padding:0;height:45px'
    },
    /*========查看=========*/
    lookOver(index, row) {
      var u_id = row.u_id;
      var u_name = row.u_name;
      var goods_img = row.goods_img;
      var goods_name = row.goods_name;
      var goods_allPrice = row.goods_allPrice;
      this.$alert('<form action="" id="productForm2">\n' +
        '    <label for="">用&nbsp;&nbsp;户&nbsp;ID:</label>\n' +
        '    <input type="text" id="productText" readonly value=' + u_id + '>\n' +
        '    <br>\n' +
        '    <label for="">用户姓名:</label>\n' +
        '    <input type="text" id="productText" readonly value=' + u_name + '>\n' +
        '    <br>\n' +
        '    <label for="">商品名称:</label>\n' +
        '    <input type="text" id="productPrice" readonly value=' + goods_name + '>\n' +
        '    <br>\n' +
        '    <label for="">商品总价:</label>\n' +
        '    <input type="text" id="productPrice" readonly value=' + goods_allPrice + '>\n' +
        '    <br>\n' +
        '    <label for="" style="margin-top:10px;float: left;">示&nbsp;&nbsp;例&nbsp;&nbsp;图:</label>\n' +
        '    <img src=' + "/api" + goods_img + ' style="margin:-25px 0 0 5px;width: 100px ;height:100px;float: left;">\n' +
        '</form>', '查看信息', {
        dangerouslyUseHTMLString: true,
        showCancelButton: false,
        showConfirmButton: false,
        customClass: 'addProductModel lookModel'
      }).catch(() => {
      });
    },
    /*========编辑=========*/
    productEdit(index, row) {
      var goods_id = row.goods_id;
      var u_id = row.u_id;
      var goods_allPrice = row.goods_allPrice.split("￥")[1].split(".")[0];
      this.$alert('<form action="" id="productForm2">\n' +
        '    <label for="">商品价格:</label>\n' +
        '    <input type="text" placeholder="输入商品价格" id="productPrice" value=' + goods_allPrice + '>\n' +
        '    <br>\n' +
        '    <span class="promptText"></span>\n' +
        '</form>', '编辑信息', {
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        showConfirmButton: true,
        customClass: 'addProductModel editModel'
      }).then(() => {
        var thisProductPriceVal = $("#productForm2 #productPrice").val();//商品价格
        if (thisProductPriceVal == "") {
          this.$message({
            type: 'info',
            message: '价格不能为空!'
          });
        } else if (thisProductPriceVal != "") {
          this.$axios.post("/api/changeShopNews.do", {
            val0: u_id, val1: goods_id,
            val2: thisProductPriceVal
          }).then((res) => {
            // console.log(res.data)
            this.$message({
              type: 'info',
              message: '修改成功'
            });
            this.$axios.get("/api/loadShopCarNews.do")
              .then((res) => {
                console.log(res.data)
                var productData = res.data.map(function (item) {
                  return {
                    u_id: item.u_id,
                    u_name: item.u_name,
                    goods_id: item.goods_id,
                    goods_name: item.goods_name,
                    goods_type: item.goods_price + "/" + item.goods_bang,
                    goods_num: item.shopcar_num,
                    goods_img: item.goods_img,
                    goods_allPrice: item.goods_count
                  }
                });
                this.tableData = productData;
                this.total = this.tableData.length;
              });
          })
        }
      }).catch(() => {
      });
    },


    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    }
    ,
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },


    /*===模糊查询--过滤数据===*/
    filterSearchText(val) {
      var searchVal = val;
      console.log(searchVal);
      var result = this.tableData.filter((value) => {
        var str = value.u_name + value.goods_name + value.goods_id;
        var searchValue = str.indexOf(searchVal);
        return searchValue != -1;
        /*不符合返回-1，符合返回搜索的*/
      });
      if (val != "") {
        return this.tableData = result;
      } else if (val == "") {
        /*加载数据库的商品*/
        this.$axios.get("/api/loadShopCarNews.do")
          .then((res) => {
            console.log(res.data)
            var productData = res.data.map(function (item) {
              return {
                u_id: item.u_id,
                u_name: item.u_name,
                goods_id: item.goods_id,
                goods_name: item.goods_name,
                goods_type: item.goods_price + "/" + item.goods_bang,
                goods_num: item.shopcar_num,
                goods_allPrice: item.goods_count
              }
            });
            this.tableData = productData;
            this.total = this.tableData.length;
          });
      }
    },
  };
  import lookBtn from '../button/button'
  import editBtn from '../button/button'
  import selectMenu from '../select/select'
  import searchBox from '../search/sousuo'

  export default {
    name: 'productMange',
    components: {
      lookBtn: lookBtn,
      editBtn: editBtn,
      selectMenu: selectMenu,
      searchBox: searchBox,
    },
    data() {
      return {
        currentPage: 1,
        pagesize: 7,
        total: 0,
        tableData: [
          {
            u_id: 2,
            u_name: "小花",
            goods_id: 1,
            goods_name: "浅草",
            goods_type: "198元/2磅",
            goods_num: 10,
            goods_allPrice: 1980,
          }
        ],
        optionsList: [],
        isShow: "",
      }
    },
    methods: productsMethods,


    created() {
      /*加载数据库的商品*/
      this.$axios.get("/api/loadShopCarNews.do")
        .then((res) => {
          console.log(res.data)
          var productData = res.data.map(function (item) {
            return {
              u_id: item.u_id,
              u_name: item.u_name,
              goods_id: item.goods_id,
              goods_name: item.goods_name,
              goods_type: item.goods_price + "/" + item.goods_bang,
              goods_num: item.shopcar_num,
              goods_img: item.goods_img,
              goods_allPrice: item.goods_count
            }
          });
          this.tableData = productData;
          this.total = this.tableData.length;
        });

    }
  }

</script>

<style>
  @import "../../assets/tankuang-1.css";

  * {
    margin: 0;
    padding: 0;
  }

  /*清除浮动*/
  .clearfix:after {
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .lookModel,
  .editModel {
    width: auto !important;
  }

  .lookModel .el-message-box__message p {
    padding: 15px !important;
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

  .searchBox {
    float: left;
    margin-left: 20px;
  }

  .pageNumber {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
  }

  .lookBtn2, .editBtn2 {
    float: left;
  }

  .editBtn2 {
    margin-left: 15%;
  }

  @media (max-width: 1335px) {
    .table_topNavContent_right,
    .lookBtn2,
    .editBtn2 {
      display: none;
    }
  }

  .btnBox2 {
    width: 120px;
    margin: 0 auto;
  }

  @media (max-height: 590px) {
    .btnBox2 {
      width: 120px;
      margin: 0 auto;
      padding-left: 3%;
    }

    .pageNumber {
      top: 28px;
      left: 24%;
    }
  }


</style>
