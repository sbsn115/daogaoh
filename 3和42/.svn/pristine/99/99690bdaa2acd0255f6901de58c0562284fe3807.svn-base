<template>
  <div id="app">
    <div class="table_topNav">
      <div class="table_topNavContent_left">客户表</div>
      <div class="table_topNavContent_right">
        <!--<div class="selectMenu">-->
          <!--<selectMenu></selectMenu>-->
        <!--</div>-->
        <div class="searchBox">
          <searchBox placeH="请输入客户名" @getSearchText="inpp"></searchBox>
        </div>
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
        id="wq"
        align="center"
        label="客户ID"
        min-width="30">
        <template slot-scope="scope" id="qe">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <!--客户姓名-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="客户姓名"
        min-width="40">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <!--性别-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="性别"
        min-width="30">
        <template slot-scope="scope">
          <span>{{ scope.row.sex }}</span>
        </template>
      </el-table-column>
      <!--地址-->
      <el-table-column
        align="center"
        label="地址"
        min-width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.dizhi }}</span>
        </template>
      </el-table-column>
      <!--出生日期-->
      <el-table-column
        align="center"
        label="出生日期"
        min-width="50">
        <template slot-scope="scope">
          <span>{{ scope.row.birthday }}</span>
        </template>
      </el-table-column>
      <!--联系方式-->
      <el-table-column
        align="center"
        label="联系方式"
        min-width="50">
        <template slot-scope="scope">
          <span>{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
      <!--vip等级-->
      <el-table-column
        align="center"
          label="VIP等级"
        min-width="40">
        <template slot-scope="scope">
          <span>{{ scope.row.vip }}</span>
        </template>
      </el-table-column>
      <!--操作-->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div class="btnBox clearfix" style="width: 190px;margin: 0px auto">
            <!--查看-->
            <lookBtn btntext="查看" btnclass="chakan" @btnEvent="lookOver(scope.$index, scope.row)"
                     class="lookBtn"></lookBtn>
            <!--编辑-->
            <editBtn btntext="编辑" btnclass="bianji" @btnEvent="productEdit(scope.$index, scope.row)"
                     class="editBtn" style="margin-left: 10px"></editBtn>
            <!--赠送-->
            <deleteBtn btntext="赠送" btnclass="shanchu"  @btnEvent="zsQuan(scope.$index, scope.row)"
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
    zsQuan(index, row) {
      // console.log(this.tableData2);
      var id=row.id;
      var name=row.name;
      console.log(name);

      // language=HTML
      this.$alert('<form action="" id="productForm7">\n' +

        '    <label class="xingming">姓名:</label>\n' +
        '    <input type="text" readonly id="quanName" value='+name+'>\n' +
        '    <br>\n' +
        '    <label class="xinbie">卷号:</label>\n' +
        '    <input type="text" placeholder="输入卷号" id="juanhao">\n' +
        '    <br>\n' +
        '    <label class="zhu">卷名:</label>\n' +
        '    <input type="text" placeholder="输入券名" id="zhuzhi">\n' +
        '    <br>\n' +
        '    <div class="miaoshu clearfix">\n' +
        '        <span>描述:</span>\n' +
        '        <textarea  style="resize: none" placeholder="输入优惠券描述" id="miaoshu"></textarea>\n' +
        '    </div>\n' +
        '     <label>生效时间:</label>\n' +
        '    <input type="text" placeholder="输入生效时间（年-月-日）" id="shengri">\n' +
        '    <br>\n' +
        '     <label class="vipp">失效时间:</label>\n' +
        '    <input type="text" placeholder="输入失效时间（年-月-日）" id="vip">\n' +
        '    <br>\n' +
        '</form>','赠送优惠券', {
        dangerouslyUseHTMLString: true,
        showCancelButton:true,
        customClass:'youhuijuan',
      }).then(() => {
        var name=$("#quanName").val();

         console.log(name);

        var juanhao=$("#juanhao").val();
        var zhuzhi=$("#zhuzhi").val();
        var miaoshu=$("#miaoshu").val();
        var shengri=$("#shengri").val();
        var vip=$("#vip").val();
        if (name=="") {
          this.$message({
            type: 'info',
            message: '请输入接收人姓名'
          });
        }else if (juanhao=="") {
          this.$message({
            type: 'info',
            message: '请输入接收人姓名'
          });
        } else if (zhuzhi=="") {
          this.$message({
            type: 'info',
            message: '请输入券名'
          });
        }else if (miaoshu=="") {
          this.$message({
            type: 'info',
            message: '请输入描述'
          });
        }
        else if (shengri=="") {
          this.$message({
            type: 'info',
            message: '请输入生效时间'
          });
        }
        else if (vip=="") {
          this.$message({
            type: 'info',
            message: '请输入失效时间'
          });
        }else{
          this.$axios.post("/api/changeQuanNews.do", {
            val0: name, val1: juanhao,
            val2: zhuzhi, val3: miaoshu, val4: shengri,val5: vip
          })
            .then((res) => {
              // console.log(res.data)
              this.$message({
                type: 'info',
                message: '赠送成功'
              });
            })
        }
      }).catch(() => {

      });
    },
    lookOver(index, row) {
      console.log(row);
      var name=row.name,id=row.id,sex=row.sex,dizhi=row.dizhi,birthday=row.birthday,phone=row.phone,vip=row.vip,jiname=row.jiname,jiguanxi=row.jiguanxi,jidata=row.jidata,jiphone=row.jiphone;

      this.$alert('<form action="" id="productForm7">\n' +
        '    <div class="zuo">\n' +
        '    <label class="ke">客户ID:</label>\n' +
        '    <input type="text" placeholder="输入商品名称" id="productText" value='+id+' readonly>\n' +
        '    <br>\n' +
        '    <label class="xingming">姓名:</label>\n' +
        '    <input type="text" placeholder="输入商品价格" id="productPrice" value='+name+' readonly>\n' +
        '    <br>\n' +
        '    <label class="xinbie">性别:</label>\n' +
        '    <select id="productTp" name="selectname" id="productTp" onfocus"this.defaultIndex=this.selectedIndex;" \n' +
        '\n' +
        'onchange="this.selectedIndex=this.defaultIndex">\n' +
        '        <option value="0">'+sex+'</option>\n' +
        '    </select>\n' +
        '    <br>\n' +
        '    <label class="zhu">住址:</label>\n' +
        '    <input type="text" placeholder="输入商品价格(例:88元)" id="zhuzhi"  value='+dizhi+' readonly>\n' +
        '    <br>\n' +
        '     <label>联系方式:</label>\n' +
        '    <input type="text" placeholder="输入商品价格(例:88元)" id="phone" value='+phone+' readonly>\n' +
        '    <br>\n' +
        '     <label>出生日期:</label>\n' +
        '    <input type="text" placeholder="输入商品价格(例:88元)" id="shengri" value='+birthday+' readonly>\n' +
        '    <br>\n' +
        '     <label class="vipp">VIP等级:</label>\n' +
        '    <input type="text" placeholder="输入商品价格(例:88元)" id="vip" value='+vip+' readonly>\n' +
        '    <br>\n' +
        '    </div>\n' +
        '    <div class="you">\n' +
        '     <label class="vipp">纪&nbsp;念&nbsp;日:</label>\n' +
        '    <select id="jiname">\n' +
        '        <option value="0">'+jiname+'</option>\n' +
        '    </select>\n' +
        '    <br>\n' +
        '     <label class="jiguanxi">关&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;系:</label>\n' +
        '    <input type="text" placeholder="输入商品价格(例:88元)" id="jiguanxi" value='+jiguanxi+' readonly>\n' +
        '    <br>\n' +
        '     <label class="jidata">日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期:</label>\n' +
        '    <input type="text" placeholder="输入商品价格(例:88元)" id="jidata" value='+jidata+' readonly>\n' +
        '    <br>\n' +
        '     <label class="jiphone">对方手机:</label>\n' +
        '    <input type="text" placeholder="输入商品价格(例:88元)" id="jiphone" value='+jiphone+' readonly>\n' +
        '    <br>\n' +
        '    </div>\n' +
        '</form>','个人信息', {
        dangerouslyUseHTMLString: true,
        showCancelButton:true,
        customClass:'chageren',
      }).then(() => {

      }).catch(() => {

      });
    },
    productEdit(index, row) {
      var name=row.name,id=row.id,sex=row.sex,dizhi=row.dizhi,birthday=row.birthday,phone=row.phone,vip=row.vip;
      this.$alert('<form action="" id="productForm7">\n' +
        '    <label class="ke">客户ID:</label>\n' +
        '    <input type="text" placeholder="输入商品名称" id="productText" readonly value='+id+'>\n' +
        '    <br>\n' +
        '    <label class="xingming">姓名:</label>\n' +
        '    <input type="text" placeholder="输入商品价格(例:88元)" id="productPrice" readonly value='+name+'>\n' +
        '    <br>\n' +
        '    <label class="xinbie">性别:</label>\n' +
        '    <select id="productTp">\n' +
        '        <option value="0">'+sex+'</option>\n' +
        // '        <option value="1">女</option>\n' +
        '    </select>\n' +
        '    <br>\n' +
        '    <label class="zhu">住址:</label>\n' +
        '    <input type="text" placeholder="输入商品价格(例:88元)" id="zhuzhi"  value='+dizhi+'>\n' +
        '    <br>\n' +
      '     <label>联系方式:</label>\n' +
      '    <input type="text" placeholder="输入商品价格(例:88元)" id="phone" value='+phone+'>\n' +
      '    <br>\n' +
        '     <label>出生日期:</label>\n' +
        '    <input type="text" placeholder="输入商品价格(例:88元)" id="shengri" readonly value='+birthday+'>\n' +
        '    <br>\n' +
        '     <label class="vipp">VIP等级:</label>\n' +
        '    <input type="text" placeholder="输入商品价格(例:88元)" id="vip" value='+vip+'>\n' +
        '    <br>\n' +
        '</form>','编辑个人信息', {
        dangerouslyUseHTMLString: true,
        showCancelButton:true,
        customClass:'biangeren',
      }).then(() => {
        this.$message({
          type: 'info',
          message: '修改成功'
        });
        var id=$(".biangeren #productText").val();
        var dizhi=$(".biangeren #zhuzhi").val();
        var phone=$(".biangeren #phone").val();
        var vip=$(".biangeren #vip").val();
        this.$axios.get("/api/biangeren.do",{params:{id:id,dizhi:dizhi,phone:phone,vip:vip}})
        .then((res) => {
          this.$axios.get("/api/kehubiao.do")
            .then((res) => {
              console.log(res.data);
              var productData = res.data.map(function (item) {
                let a=item.u_birthday;
                item.u_birthday=a.split("T")[0];
                return {
                  id: item.u_id,
                  name: item.u_name,
                  sex:item.u_sex,
                  dizhi:item.u_dizhi,
                  birthday:item.u_birthday,
                  phone:item.u_phone,
                  vip:item.u_vip,
                  jiname:item.memorial_name,
                  jiguanxi:item.memorial_relative,
                  jidata:item.memorial_date,
                  jiphone:item.memorial_phone
                }
              });
              this.tableData = productData;
              this.total = this.tableData.length;
            })
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
    inpp:function(data){
      if (data.length<=0){
        this.$axios.get("/api/kehubiao.do")
          .then((res) => {
            var productData = res.data.map(function (item) {
              // console.log(item)
              let a=item.u_birthday;
              item.u_birthday=a.split("T")[0];
              return {
                id: item.u_id,
                name: item.u_name,
                sex:item.u_sex,
                dizhi:item.u_dizhi,
                birthday:item.u_birthday,
                phone:item.u_phone,
                vip:item.u_vip,
              }
            });
            this.tableData = productData;
            this.total = this.tableData.length;
          })
      } else if (data.length>0){
        var result= this.tableData.filter(function (obj) {
          var searchVal= String(obj.id).indexOf(data)!=-1||obj.name.indexOf(data)!=-1||obj.sex.indexOf(data)!=-1||obj.dizhi.indexOf(data)!=-1||obj.birthday.indexOf(data)!=-1||obj.phone.indexOf(data)!=-1||obj.vip.indexOf(data)!=-1;
          return searchVal;
        });
        return this.tableData=result;
      }
    }
  };
  import lookBtn from '../button/button'
  import editBtn from '../button/button'
  import deleteBtn from '../button/button'
  import selectMenu from '../select/select'
  import searchBox from '../search/sousuo'
  import addBtn from '../button/button'

  export default {
    name: 'kehuxinxi',
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
        tableData: []
      }
    },
    methods: productsMethods,
    created() {
      /*加载数据库的商品*/
      this.$axios.get("/api/kehubiao.do")
        .then((res) => {
          var productData = res.data.map(function (item) {
            let a=(item.u_birthday).split("T")[0];
            return {
              id: item.u_id,
              name: item.u_name,
              sex:item.u_sex,
              dizhi:item.u_dizhi,
              birthday:a,
              phone:item.u_phone,
              vip:item.u_vip,
              jiname:item.memorial_name,
              jiguanxi:item.memorial_relative,
              jidata:item.memorial_date,
              jiphone:item.memorial_phone
            }
          });
          this.tableData = productData;
          this.total = this.tableData.length;
          console.log(this.tableData);
        })
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

  * {
    margin: 0;
    padding: 0;
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
#quanName{
  margin-left: 15px;
  margin-bottom: 15px;
  width: 246px;
}
</style>
