
<template>
  <div id="app">
    <div class="table_topNav">
      <div class="table_topNavContent_left">优惠券表</div>
      <div class="table_topNavContent_right">

      </div>
    </div>
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      :cell-style="cellStyle"
      :header-cell-style="rowClass"
      align="center"
      style="width: 100% ;table-layout:fixed">
      <!--复选框-->
      <el-table-column
        align="center"
        type="selection"
        min-width="20">
      </el-table-column>
      <!--客户ID-->
      <el-table-column
        align="center"
        label="客户ID"
        min-width="40">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <!--客户姓名-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="客户姓名"
        min-width="60">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <!--卷名-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="卷名"
        min-width="90">
        <template slot-scope="scope">
          <span>{{ scope.row.juanname }}</span>
        </template>
      </el-table-column>
      <!--卷号-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="卷号"
        min-width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.juanhao }}</span>
        </template>
      </el-table-column>

      <!--描述-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="描述"
        min-width="110">
        <template slot-scope="scope">
          <span>{{ scope.row.juanxiangqin }}</span>
        </template>
      </el-table-column>
      <!--联系方式-->
      show-overflow-tooltip
      <el-table-column
        align="center"
        label="生效时间"
        min-width="65">
        <template slot-scope="scope">
          <span>{{ scope.row.juansheng }}</span>
        </template>
      </el-table-column>
      <!--vip等级-->
      <el-table-column
        align="center"
          label="失效时间"
        min-width="65">
        <template slot-scope="scope">
          <span>{{ scope.row.juanshi }}</span>
        </template>
      </el-table-column>
      <!--操作-->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div class="btnBox clearfix" style="margin: 0px auto">
            <!--查看-->
            <lookBtn btntext="查看" btnclass="chakan" @btnEvent="lookOver(scope.$index, scope.row)"
                     class="lookBtn" style="margin-left: 22px"></lookBtn>
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
  import "../../assets/lib/jquery-1.12.4"
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

    lookOver(index, row) {
      // console.log(this.tableData2);

      var name=row.name,id=row.id,juanhao=row.juanhao,
        juanname=row.juanname,
        juanxiangqin=this.tableData2[index].juanxiangqin,
        juansheng=row.juansheng,
        juanshi=row.juanshi;
      this.$alert('<form action="" id="productForm7">\n' +
        '    <label class="ke">客户ID:</label>\n' +
        '    <input type="text" placeholder="输入商品名称" id="productText" value='+id+' readonly>\n' +
        '    <br>\n' +
        '    <label class="xingming">姓名:</label>\n' +
        '    <input type="text" placeholder="输入商品价格(例:88元)" id="productPrice" value='+name+' readonly>\n' +
        '    <br>\n' +
        '    <label class="xinbie">卷号:</label>\n' +
        '    <input type="text" placeholder="输入商品价格(例:88元)" id="juanhao" value='+juanhao+' readonly>\n' +
        '    <br>\n' +
        '    <label class="zhu">卷名:</label>\n' +
        '    <input type="text" placeholder="输入商品价格(例:88元)" id="zhuzhi"  value='+juanname+' readonly>\n' +
        '    <br>\n' +
        '    <div class="miaoshu clearfix">\n' +
        '        <span>描述:</span>\n' +
        '        <textarea readonly style="resize: none">'+juanxiangqin+'</textarea>\n' +
        '    </div>\n' +
        '     <label>生效时间:</label>\n' +
        '    <input type="text" placeholder="输入商品价格(例:88元)" id="shengri" value='+juansheng+' readonly>\n' +
        '    <br>\n' +
        '     <label class="vipp">失效时间:</label>\n' +
        '    <input type="text" placeholder="输入商品价格(例:88元)" id="vip" value='+juanshi+' readonly>\n' +
        '    <br>\n' +
        '</form>','优惠券信息', {
        dangerouslyUseHTMLString: true,
        showCancelButton:true,
        customClass:'youhuijuan',
      }).then(() => {

      }).catch(() => {

      });
    },
    productEdit(index, row) {

    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    }
    ,
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  };
  import lookBtn from '../button/button'
  import editBtn from '../button/button'
  import deleteBtn from '../button/button'
  import selectMenu from '../select/select'
  import searchBox from '../search/sousuo'
  import addBtn from '../button/button'

  export default {
    name: 'youhujuan',
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
        tableData2: [],
        juanxiangqin:"",
      }
    },
    methods: productsMethods,
    created() {

      /*加载数据库的商品*/
      this.$axios.get("/api/youhuijuan.do")
        .then((res) => {
          /*加载数据库的商品*/
          this.$axios.get("/api/youhuijuan2.do")
            .then((res) => {
          var productData = res.data.map(function (item) {
            let a=item.quan_date1;
            let b=item.quan_date2;
            let c=item.quan_decription;
            item.quan_date1=a.split("T")[0];
            item.quan_date2=b.split("T")[0];
            item.quan_decription=c.split("：")[0];
            return {
              id: item.u_id,
              name: item.u_name,
              juanhao:item.quan_num,
              juanname:item.quan_name,
              juanxiangqin:item.quan_decription,
              juansheng:item.quan_date1,
              juanshi:item.quan_date2,
            }
          });
          this.tableData = productData;
          this.total = this.tableData.length;



              this.$axios.get("/api/youhuijuan2.do")
                .then((res)=>{
                  var productData2 = res.data.map(function (item) {
                    let a=item.quan_date1;
                    let b=item.quan_date2;
                    let c=item.quan_decription;
                    item.quan_date1=a.split("T")[0];
                    item.quan_date2=b.split("T")[0];
                    return {
                      id: item.u_id,
                      name: item.u_name,
                      juanhao:item.quan_num,
                      juanname:item.quan_name,
                      juanxiangqin:item.quan_decription,
                      juansheng:item.quan_date1,
                      juanshi:item.quan_date2,
                    }
                  });
                  this.tableData2 = productData2;
                })
                })
        });
    },
    computed:{

    },
  }

</script>

<style>
  @import "../../assets/tankuang-7.css";
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
