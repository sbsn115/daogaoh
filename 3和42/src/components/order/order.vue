<template>
  <div id="app">
    <div class="table_topNav">
      <div class="table_topNavContent_left">订单表</div>
      <div class="table_topNavContent_right">
        <div class="selectMenu">
          <selectMenu @searchEvent="onSearch2" :options1="optionsList" placeHolder="请选择订单时间"></selectMenu>
        </div>
        <div class="selectMenu">
          <selectMenu @searchEvent="onSearch1" :options1="optionsList2" placeHolder="请选择订单状态"></selectMenu>
        </div>
        <div class="searchBox">
          <searchBox placeH="请输入订单号" @getSearchText="filterSearchNumber"></searchBox><!--:searchText="searchText"-->
        </div>
      </div>
    </div>
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      :cell-style="cellStyle"
      :header-cell-style="rowClass"
      align="center"
      style="width: 100% ;table-layout:fixed">

      <!--订单ID-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="订单ID"
        min-width="25">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.ordsId }}</span>
        </template>
      </el-table-column>


      <!--用户姓名-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="用户名"
        min-width="30">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>


      <!--订单号-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="订单号"
        min-width="60">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.orderNum }}</span>
        </template>
      </el-table-column>

      <!--订单日期-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="订单日期"
        min-width="40">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.orderDate}}</span>
        </template>
      </el-table-column>

      <!--收货人-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="收货人"
        min-width="40">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.orderPer }}</span>
        </template>
      </el-table-column>


      <!--收货地址-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="收货地址"
        min-width="45">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.orderAddress }}</span>
        </template>
      </el-table-column>

      <!--收货电话-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="收货电话"
        min-width="45">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.orderPhone }}</span>
        </template>
      </el-table-column>



      <!--订单状态-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="订单状态"
        min-width="40">
        <template slot-scope="scope">
          <span>{{ scope.row.orderState }}</span>
        </template>
      </el-table-column>


      <!--支付方式-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="支付方式"
        min-width="40">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>支付宝支付</span>
        </template>
      </el-table-column>


      <!--操作-->
      <el-table-column label="操作" min-width="120" >
        <template slot-scope="scope">
          <div class="btnBox clearfix">
            <!--查看-->

            <lookBtn btntext="查看" btnclass="chakan" @btnEvent="lookOr(scope.$index, scope.row)"
                     class="lookBtn"></lookBtn>
            <!--编辑-->
            <editBtn btntext="编辑" btnclass="bianji" @btnEvent="orderEdit(scope.$index, scope.row)"
                     class="editBtn"></editBtn>
            <!--修改状态-->
            <deleteBtn btntext="修改状态" btnclass="shanchu" @btnEvent="deState(scope.$index, scope.row)"
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
  import '../../assets/lib/jquery-1.12.4'

  /*methods*/
  var productsMethods = {
    // 修改状态
    deState:function(index,row){
      this.$axios.post("/api/stateId.do",{orderNum:row.orderNum})
        .then(resp=>{
          this.$axios.get("/api/loadOrders.do")
            .then((res) => {
              var productData = res.data.map(function (item) {
                var orderDate=(item.ords_tiime).split("T")[0];
                orderDate=orderDate.split("-");
                var lastT=parseInt(orderDate[2])+1
                var orderDate1=orderDate[0]+"-"+orderDate[1]+"-"+lastT;
                return {
                  ordsId: item.ords_id,
                  name: item.u_name,
                  orderNum: item.ords_num,
                  orderDate: orderDate1,
                  orderPer: item.address_user,
                  orderAddress: item.address_place,
                  orderPhone: item.phone,
                  orderState: item.state_name,
                }
              });
              this.tableData = productData;
              this.total = this.tableData.length;
            });
        })
      this.$message({
        type:'info',
        message:'修改成功'
      })
    },


    rowClass(index, row) {
      return 'text-align:center;font-size:12px;color:#684029'
    },
    cellStyle() {
      return 'font-size:12px;color:#684029;padding:0;height:45px'
    },


// 查看订单详情
    lookOr(index, row) {
      var that=this;
      var orderNum=row.orderNum;// 订单号
      var orderAddress=row.orderAddress; //收货地址
      var orderDate=row.orderDate; //订单时间
      var orderPer=row.orderPer; //收货人姓名
      var orderPhone=row.orderPhone; //收货电话
      var name=row.name; //收货电话

      this.$axios.post("/api/lookOrder.do",{orderNum:row.orderNum})
        .then(resp=>{
          var strShopNum="";
          var strShopMoney="";
          var strShopCount="";
           var allMoney=0;
          for(var i=0;i<resp.data.length;i++){
            strShopNum+="<p class='tableColor'>"+resp.data[i].goods_name+"("+resp.data[i].goods_bang+")"+"</p>";
            strShopMoney+="<p class='tableColor'>"+resp.data[i].shop_money+"</p>";
            strShopCount+="<p class='tableColor'>"+resp.data[i].shop_count+"</p>";
            allMoney+=parseInt((resp.data[i].shop_money).split("￥")[1])
          }
         var footerP="<p class='tableColor1'>订单总额：￥"+allMoney+".00"+"</p>"
          var productData = resp.data.map(function (item) {
              that.$alert('<form action="" id="productForm2">\n' +
                '    <label for="">&nbsp;&nbsp;&nbsp;订单编号:</label>\n' +
                '    <input type="text" id="orderNum" readonly value=' + orderNum + '>\n' +
                '    <br>\n' +
                '    <label for="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户名:</label>\n' +
                '    <input type="text" id="orderName" readonly value='+ name +'>\n' +
                '    <br>\n' +
                '    <label for="">&nbsp;&nbsp;&nbsp;订单日期:</label>\n' +
                '    <input type="text" id="orderDate" readonly value=' +orderDate+ '>\n' +
                '    <br>\n' +
                '    <label for="">收货人姓名:</label>\n' +
                '    <input type="text" id="orderPer" readonly value='+  orderPer+'>\n' +
                '    <br>\n' +
                '    <label for="">&nbsp;&nbsp;&nbsp;收货地址:</label>\n' +
                '    <input type="text" id="orderAddress" readonly value=' + orderAddress +'>\n' +
                '    <br>\n' +
                '    <label for="">收货人电话:</label>\n' +
                '    <input type="text" id="orderPhone" readonly value=' + orderPhone + '>\n' +
                '    <br>\n' +
                '    <label for="">&nbsp;&nbsp;&nbsp;商品信息:</label>\n' +
                ' <table cellspacing="0" cellpadding="0" id="shopTable">\n' +
                ' <thead>\n' +
                ' <tr align="center" style="color:#684029;">\n' +
                ' <th>商品名称</th>\n' +
                ' <th>商品数量</th>\n' +
                ' <th>商品价格</th>\n' +
                ' </tr>\n' +
                 '   </thead>\n' +
                 ' <tbody>\n' +
                 ' <tr>\n' +
                 ' <td>'+strShopNum+'</td>\n' +
                 ' <td>'+strShopCount+'</td>\n' +
                 ' <td>'+strShopMoney+'</td>\n' +
                 ' </tr>\n' +
                 ' </tbody>\n' +
                ' <tfooter>\n' +
                ' <tr>\n' +
                ' <td colspan="3">'+footerP+'</td>\n' +
                ' </tr>\n' +
                ' </tfooter>\n' +
                 ' </table>\n' +
                '</form>', '查看订单', {
                dangerouslyUseHTMLString: true,
                showCancelButton: false,
                showConfirmButton: false,
                customClass: 'addProductModel addProductModel-2'
              }).catch(() => {
              });
            });

        })

    },


// 编辑订单详情
    orderEdit(index, row) {
      this.$message({
        type:'info',
        message:'订单不可修改'
      })
    },


    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    }
    ,
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },



    /*下拉菜单筛选  按时间筛选*/
    onSearch2(val) {
     if(val==0){
       this.$axios.get("/api/todayOrders.do")
         .then((res) => {
           var productData = res.data.map(function (item) {
             var orderDate=(item.ords_tiime).split("T")[0];
             orderDate=orderDate.split("-");
             var lastT=parseInt(orderDate[2])+1
             var orderDate1=orderDate[0]+"-"+orderDate[1]+"-"+lastT;
             return {
               ordsId: item.ords_id,
               name: item.u_name,
               orderNum: item.ords_num,
               orderDate: orderDate1,
               orderPer: item.address_user,
               orderAddress: item.address_place,
               orderPhone: item.phone,
               orderState: item.state_name,
             }
           });
           this.tableData = productData;
           this.total = this.tableData.length;
         });
     }else if(val==1){
       this.$axios.get("/api/weekOrders.do")
         .then((res) => {
           var productData = res.data.map(function (item) {
             var orderDate=(item.ords_tiime).split("T")[0];
             orderDate=orderDate.split("-");
             var lastT=parseInt(orderDate[2])+1
             var orderDate1=orderDate[0]+"-"+orderDate[1]+"-"+lastT;
             return {
               ordsId: item.ords_id,
               name: item.u_name,
               orderNum: item.ords_num,
               orderDate: orderDate1,
               orderPer: item.address_user,
               orderAddress: item.address_place,
               orderPhone: item.phone,
               orderState: item.state_name,
             }
           });
           this.tableData = productData;
           this.total = this.tableData.length;
         });
     }else if(val==2){
       this.$axios.get("/api/monthOrders.do")
         .then((res) => {
           var productData = res.data.map(function (item) {
             var orderDate=(item.ords_tiime).split("T")[0];
             orderDate=orderDate.split("-");
             var lastT=parseInt(orderDate[2])+1
             var orderDate1=orderDate[0]+"-"+orderDate[1]+"-"+lastT;
             return {
               ordsId: item.ords_id,
               name: item.u_name,
               orderNum: item.ords_num,
               orderDate: orderDate1,
               orderPer: item.address_user,
               orderAddress: item.address_place,
               orderPhone: item.phone,
               orderState: item.state_name,
             }
           });
           this.tableData = productData;
           this.total = this.tableData.length;
         });
     }else if(val==3){
       this.$axios.get("/api/loadOrders.do")
         .then((res) => {
           var productData = res.data.map(function (item) {
             var orderDate=(item.ords_tiime).split("T")[0];
             orderDate=orderDate.split("-");
             var lastT=parseInt(orderDate[2])+1
             var orderDate1=orderDate[0]+"-"+orderDate[1]+"-"+lastT;
             return {
               ordsId: item.ords_id,
               name: item.u_name,
               orderNum: item.ords_num,
               orderDate: orderDate1,
               orderPer: item.address_user,
               orderAddress: item.address_place,
               orderPhone: item.phone,
               orderState: item.state_name,
             }
           });
           this.tableData = productData;
           this.total = this.tableData.length;
         });
     }
    },


    /*下拉菜单筛选  按状态筛选*/
    onSearch1(val) {
      if(val==0){
        this.$axios.get("/api/noFinishOrders.do")
          .then((res) => {
            var productData = res.data.map(function (item) {
              var orderDate=(item.ords_tiime).split("T")[0];
              orderDate=orderDate.split("-");
              var lastT=parseInt(orderDate[2])+1
              var orderDate1=orderDate[0]+"-"+orderDate[1]+"-"+lastT;
              return {
                ordsId: item.ords_id,
                name: item.u_name,
                orderNum: item.ords_num,
                orderDate: orderDate1,
                orderPer: item.address_user,
                orderAddress: item.address_place,
                orderPhone: item.phone,
                orderState: item.state_name,
              }
            });
            this.tableData = productData;
            this.total = this.tableData.length;
          });
      }else if(val==1){
        this.$axios.get("/api/finishOrders.do")
          .then((res) => {
            var productData = res.data.map(function (item) {
              var orderDate=(item.ords_tiime).split("T")[0];
              orderDate=orderDate.split("-");
              var lastT=parseInt(orderDate[2])+1
              var orderDate1=orderDate[0]+"-"+orderDate[1]+"-"+lastT;
              return {
                ordsId: item.ords_id,
                name: item.u_name,
                orderNum: item.ords_num,
                orderDate: orderDate1,
                orderPer: item.address_user,
                orderAddress: item.address_place,
                orderPhone: item.phone,
                orderState: item.state_name,
              }
            });
            this.tableData = productData;
            this.total = this.tableData.length;
          });
      }else if(val==2){
        this.$axios.get("/api/loadOrders.do")
          .then((res) => {
            var productData = res.data.map(function (item) {
              var orderDate=(item.ords_tiime).split("T")[0];
              orderDate=orderDate.split("-");
              var lastT=parseInt(orderDate[2])+1
              var orderDate1=orderDate[0]+"-"+orderDate[1]+"-"+lastT;
              return {
                ordsId: item.ords_id,
                name: item.u_name,
                orderNum: item.ords_num,
                orderDate: orderDate1,
                orderPer: item.address_user,
                orderAddress: item.address_place,
                orderPhone: item.phone,
                orderState: item.state_name,
              }
            });
            this.tableData = productData;
            this.total = this.tableData.length;
          });
      }


    },



    /*===模糊查询--过滤数据===*/
    filterSearchNumber(val) {
      var searchVal = val;
      var result = this.tableData.filter((value) => {
        var searchValue = value.orderNum.indexOf(searchVal);
        return searchValue != -1;
      });
      if (val != "") {
        return this.tableData = result;
      } else if (val == "") {
        this.$axios.get("/api/loadOrders.do")
          .then((res) => {
            var productData = res.data.map(function (item) {
              var orderDate=(item.ords_tiime).split("T")[0];
              orderDate=orderDate.split("-");
              var lastT=parseInt(orderDate[2])+1;
              var orderDate1=orderDate[0]+"-"+orderDate[1]+"-"+lastT;
              return {
                ordsId: item.ords_id,
                name: item.u_name,
                orderNum: item.ords_num,
                orderDate: orderDate1,
                orderPer: item.address_user,
                orderAddress: item.address_place,
                orderPhone: item.phone,
                orderState: item.state_name,
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
  import deleteBtn from '../button/button'
  import selectMenu from '../select/select'
  import searchBox from '../search/sousuo'
  import addBtn from '../button/button'
  import myModel from '../model/model'
  export default {
    name: 'productMange',
    components: {
      lookBtn: lookBtn,
      editBtn: editBtn,
      deleteBtn: deleteBtn,
      selectMenu: selectMenu,
      searchBox: searchBox,
      addBtn: addBtn,
      myModel: myModel
    },
    data() {
      return {
        currentPage: 1,
        pagesize: 7,
        total: 0,
        tableData: [],
        optionsList: [{label:"当日订单",value: 0},{label:"近一周订单",value: 1},{label:"近一个月订单",value: 2},{label:"全部订单",value: 3}],
        optionsList2: [{label:"未完成",value: 0},{label:"已完成",value: 1},{label:"全部订单",value: 2}],
        isShow: "",
      }
    },
    methods: productsMethods,

    created() {
      /*加载数据库的订单*/
      this.$axios.get("/api/loadOrders.do")
        .then((res) => {
          var productData = res.data.map(function (item) {
            var orderDate=(item.ords_tiime).split("T")[0];
            orderDate=orderDate.split("-");
            var lastT=parseInt(orderDate[2])+1
            var orderDate1=orderDate[0]+"-"+orderDate[1]+"-"+lastT;
            return {
              ordsId: item.ords_id,
              name: item.u_name,
              orderNum: item.ords_num,
              orderDate: orderDate1,
              orderPer: item.address_user,
              orderAddress: item.address_place,
              orderPhone: item.phone,
              orderState: item.state_name,
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

  .changeImg {
    width: 45px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-75%,-50%);
    opacity: 0;
  }
  .tableColor{
    color: #684029;
    border-bottom: 1px solid #ebeef5;
    text-align: center;
  }
  #shopTable tr th{
    border-bottom: 1px solid #ebeef5;
  }
  #shopTable{
    border: 1px solid #ebeef5;
  }

  #shopTable tr th:nth-of-type(1){
    width: 200px;
  }

  .tableColor1{
    color: #684029;
    text-align: right;
    font-weight: 900;
  }
  .el-message-box__message p {
    margin: 0;
    line-height: 31px;
  }

</style>
