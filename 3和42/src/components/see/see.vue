<template>
  <div id="app">
    <div class="table_topNav">
      <div class="table_topNavContent_left">查看公告</div>
      <div class="table_topNavContent_right">
        <!--<div class="selectMenu">-->
          <!--<selectMenu></selectMenu>-->
        <!--</div>-->
        <div class="searchBox">
          <searchBox placeH="请输入公告名称" @getSearchText="filterSearchText"></searchBox>
        </div>
        <div class="addBtn">
          <addBtn btntext="发布新公告" btnclass="xinzeng" style="margin: -5px 0 0 0;float: left;"
                  @btnEvent="addProduct"></addBtn>

          <deleteBtn btntext="批量删除" btnclass="shanchu" @btnEvent="bulletinDelete2"
                     style="margin: -5px 0 0 10px;float: right;"></deleteBtn>
        </div>
      </div>
    </div>
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      :cell-style="cellStyle"
      :header-cell-style="rowClass"
      @selection-change="handleSelectionChange"
      align="center"
      style="width: 100% ;table-layout:fixed">
      <!--复选框-->
      <el-table-column
        align="center"
        type="selection"
        width="44">
      </el-table-column>
      <!--公告ID-->
      <el-table-column
        align="center"
        label="公告ID"
        width="50">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <!--公告名称-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="公告名称"
        width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <!--公告内容-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="公告内容"
        width="240">
        <template slot-scope="scope">
          <span>{{ scope.row.text }}</span>
        </template>
      </el-table-column>
      <!--公告发布日期-->
      <el-table-column
        align="center"
        label="公告发布日期"
        width="160">
        <template slot-scope="scope">
          <span>{{ scope.row.start }}</span>
        </template>
      </el-table-column>
      <!--公告失效日期-->
      <el-table-column
        align="center"
        label="公告失效日期"
        width="160">
        <template slot-scope="scope">
          <span>{{ scope.row.end }}</span>
        </template>
      </el-table-column>
      <!--操作-->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div class="btnBox clearfix">
            <!--查看-->

            <lookBtn btntext="查看" btnclass="chakan" @btnEvent="lookOver(scope.$index, scope.row)"
                     class="lookBtn" style="margin-left: 18px"></lookBtn>
            <!--删除-->
            <deleteBtn btntext="删除" btnclass="shanchu" @btnEvent="bulletinDelete1(scope.$index, scope.row)"
                       class="deleteBtn"></deleteBtn>
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

  var bulletinMethods = {
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
    addProduct() {
      this.$router.push({path:'/release'})
    },
    //查看公告
    lookOver(index, row) {
      var name = row.name;
      var text = row.text;
      var start = row.start;
      var end = row.end;
      this.$alert('<form action="" id="hproductForm2">\n' +
        '    <label for="" class="gong">公告名称:</label>\n' +
        '    <input type="text" id="productText" readonly value=' + name + '>\n' +
        '    <br>\n' +
        '    <label for="" class="gong">公告内容:</label>\n' +
        '    <input type="text" id="productPrice" readonly value=' + text + '>\n' +
        '    <br>\n' +
        '    <label for="">公告发布日期:</label>\n' +
        '    <input type="text" id="productPrice" readonly value=' + start + '>\n' +
        '    <br>\n' +
        '    <label for="">公告失效日期:</label>\n' +
        '    <input type="text" id="productPrice" readonly value=' + end + '>\n' +
        '    <br>\n' +
        '</form>', '查看公告', {
        dangerouslyUseHTMLString: true,
        showCancelButton: false,
        showConfirmButton: false,
        customClass: 'addProductModel'
      }).catch(() => {
      });
    },
    //单个删除公告
    bulletinDelete1(index, row) {
      console.log( row);
      this.$alert('<div class="shanchu clearfix">\n' +
        '        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAACyklEQVQ4EaWVS0wTYRDHf/3aAqU8VaBASQB5JI0xJIqJBiMHlKMGYzyoicaLXjyZePNgYkw8cPPg0ZNRD8aDB1+JL6JRkChGA0QwBKhAsTxCgS3tOtvSpl12UeJks+33zcx/5vvvzHwOXdcxiR5nbQltgVAvwTfMDRHXKG7Ed4CKNtxFuL0ol8lJlg4z1nKIX2/5cZfxJ2jzZgdnHr42Gs9Q1Y7Xj0NlGmRi6Ux/4Pttfj5iNQwb8k37uQup7iBwAf9hySa9nYE19pi+a4T60GNpte0fyaiokZYrNJ3FsQ6Xwpp6R88lZgXIPp2NwPlVtN2i9lhSkzjw4hhfupnttwJy4Cogp8REzTpsJEj/DWY+JQlRxKNMPGPyhfXRlJvARfZ3G3AWohP+yugDtEVRKuNjjdxHm7Ow/JettWXGn7IwLKkpZnqNZ0s0ZcXQmR9m6r2cTxF8jSYV8B8SXTSKKaapRBFs5dtZBp0flN5QibK01Cc3ddYiRJeQxtpEpOH0eFYTWBgLj6shloPoUQtt9pYLlZu9Y1rFWQnjniW+aTOoHGkmaYV6k7d5KTMjKkfYFMtbJZNDUbYXA9VGhKapHmNsSEnbicNFaQDlVviPUFhrZ2YkXtzE9hac9lR4Kqhsx5mnKKjB32mbmqTccIrdl8kptY7ncFLeyrZdEtUleNSfIPiS3wMW1jJRR+7hLrBtMo+PuuN4q8VXGaco30fzeXKtIgtf4W9MfyS2YhFJsq7rovaokJXAkpdw0XyOhtO48i0cjC2rxpAz+TvYcxUZswlJzUJZyMD4fJOhO0Qm/9bqDjxlxghsvU7ejiSQvDOwZCVFNPrQeCaeszJjnY7cQ76D1Hex8yQubxpoA5ah0YlMEx5g8pUxI+cGia0azSg8FNVReYiaTkoCeGtQzkwgS6yUgZAdjaBrCa5044KQmhRCnZ70ZZEyXf/9AwLpAEG3+zEQAAAAAElFTkSuQmCC">\n' +
        '        <p>确认删除</p>\n' +
        '    </div>', '提示', {
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        customClass: 'shanzeng'
      }).then(()=>{
        this.$axios.get("/api/delBulletin.do",{params:{id:row.id}})
          .then((res) => {

            this.$message({
              type: 'info',
              message: '删除成功!'
            });
            console.log(res.data)
            /*加载数据库的商品*/
            this.$axios.get("/api/loadBulletin.do")
              .then((res) => {
                var bulletinData = res.data.map(function (item) {
                  return {
                    id: item.b_id,
                    name: item.b_name,
                    text: item.b_text,
                    start: item.b_start,
                    end: item.b_end
                  }
                });
                this.tableData = bulletinData;
                this.total = this.tableData.length;
              });

          });
      }).catch(() => {

      });
    },

    /*将选中的加data中的入数组*/
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    /*批量删除*/
    bulletinDelete2() {
      this.$alert('<div class="del clearfix">\n' +
        '        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAACyklEQVQ4EaWVS0wTYRDHf/3aAqU8VaBASQB5JI0xJIqJBiMHlKMGYzyoicaLXjyZePNgYkw8cPPg0ZNRD8aDB1+JL6JRkChGA0QwBKhAsTxCgS3tOtvSpl12UeJks+33zcx/5vvvzHwOXdcxiR5nbQltgVAvwTfMDRHXKG7Ed4CKNtxFuL0ol8lJlg4z1nKIX2/5cZfxJ2jzZgdnHr42Gs9Q1Y7Xj0NlGmRi6Ux/4Pttfj5iNQwb8k37uQup7iBwAf9hySa9nYE19pi+a4T60GNpte0fyaiokZYrNJ3FsQ6Xwpp6R88lZgXIPp2NwPlVtN2i9lhSkzjw4hhfupnttwJy4Cogp8REzTpsJEj/DWY+JQlRxKNMPGPyhfXRlJvARfZ3G3AWohP+yugDtEVRKuNjjdxHm7Ow/JettWXGn7IwLKkpZnqNZ0s0ZcXQmR9m6r2cTxF8jSYV8B8SXTSKKaapRBFs5dtZBp0flN5QibK01Cc3ddYiRJeQxtpEpOH0eFYTWBgLj6shloPoUQtt9pYLlZu9Y1rFWQnjniW+aTOoHGkmaYV6k7d5KTMjKkfYFMtbJZNDUbYXA9VGhKapHmNsSEnbicNFaQDlVviPUFhrZ2YkXtzE9hac9lR4Kqhsx5mnKKjB32mbmqTccIrdl8kptY7ncFLeyrZdEtUleNSfIPiS3wMW1jJRR+7hLrBtMo+PuuN4q8VXGaco30fzeXKtIgtf4W9MfyS2YhFJsq7rovaokJXAkpdw0XyOhtO48i0cjC2rxpAz+TvYcxUZswlJzUJZyMD4fJOhO0Qm/9bqDjxlxghsvU7ejiSQvDOwZCVFNPrQeCaeszJjnY7cQ76D1Hex8yQubxpoA5ah0YlMEx5g8pUxI+cGia0azSg8FNVReYiaTkoCeGtQzkwgS6yUgZAdjaBrCa5044KQmhRCnZ70ZZEyXf/9AwLpAEG3+zEQAAAAAElFTkSuQmCC">\n' +
        '        <p>确认删除?</p>\n' +
        '    </div>', '提示', {
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        customClass: 'deleteProduct'
      }).then(() => {
        // console.log(this.multipleSelection[0].id)
        // console.log(this.multipleSelection[1].id)
        var selectArr=this.multipleSelection;
        this.$axios.post("/api/deleteBulletin.do", {selectArr:selectArr})
          .then((res) => {
            this.$message({
              type: 'info',
              message: '成功删除'
            });
            this.$axios.get("/api/loadBulletin.do")
              .then((res) => {
                var bulletinData = res.data.map(function (item) {
                  return {
                    id: item.b_id,
                    name: item.b_name,
                    text: item.b_text,
                    start: item.b_start,
                    end: item.b_end
                  }
                });
                this.tableData = bulletinData;
                this.total = this.tableData.length;
              });
          })
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
        var searchValue = value.name.indexOf(searchVal);
        return searchValue != -1;
        /*不符合返回-1，符合返回搜索的*/
      });
      if (val != "") {
        return this.tableData = result;
      } else if (val == "") {
        this.$axios.get("/api/loadBulletin.do")
          .then((res) => {
             console.log(res.data)
            var bulletinData = res.data.map(function (item) {
              return {
                id: item.b_id,
                name: item.b_name,
                text: item.b_text,
                start: item.b_start,
                end: item.b_end
              }
            });
            this.tableData = bulletinData;
            this.total = this.tableData.length;
          });
      }
    },
  };
  import lookBtn from '../button/button'
  import editBtn from '../button/button'
  import deleteBtn from '../button/button'
  import selectMenu from '../select/select'
  import searchBox from '../search/sousuo'
  import addBtn from '../button/button'

  export default {
    name: 'productMange',
    components: {
      lookBtn: lookBtn,
      editBtn: editBtn,
      deleteBtn: deleteBtn,
      selectMenu: selectMenu,
      searchBox: searchBox,
      addBtn: addBtn
    },
    data() {
      return {
        currentPage: 1,
        pagesize: 7,
        total:0,
        tableData: [],
        multipleSelection: []
      }
    },
    methods: bulletinMethods,
    created() {
      /*加载数据库的商品*/
      this.$axios.get("/api/loadBulletin.do")
        .then((res) => {
//           console.log(res.data);

          var bulletinData = res.data.map(function (item) {
            return {
              id: item.b_id,
              name: item.b_name,
              text: item.b_text,
              start: item.b_start,
              end: item.b_end
            }
          });
          this.tableData = bulletinData;
          this.total = this.tableData.length;
        });
    }

  }

</script>

<style>
  @import "../../assets/tankuang-h.css";
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

</style>
