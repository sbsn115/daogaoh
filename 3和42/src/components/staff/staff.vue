<script src="../../../../../../45645/node/routes/router.js"></script>
<template>
  <div id="app">
    <div class="table_topNav">
      <div class="table_topNavContent_left">员工管理</div>
      <div class="table_topNavContent_right">
        <div class="searchBox">
          <searchBox placeH="请输入搜索员工姓名" @getSearchText="filterSearchText"></searchBox>
        </div>
        <div class="addBtn">
          <addBtn btntext="新增" btnclass="xinzeng" style="margin: -5px 0 0 0;float: left;"
                  @btnEvent="Add"></addBtn>

          <deleteBtn btntext="批量删除" btnclass="shanchu" @btnEvent="handleDelete"
                     style="margin: -5px 0 0 10px;float: right;"></deleteBtn>
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
      <!--商品ID-->
      <el-table-column
        align="center"
        label="ID"
        min-width="20">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <!--员工姓名-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="员工姓名"
        min-width="30">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
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
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.sex }}</span>
        </template>
      </el-table-column>
      <!--家庭住址-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="家庭住址"
        min-width="50">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <!--联系方式-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="联系方式"
        min-width="50">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
       <!--工作状态 -->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="工作状态"
        min-width="40">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.state }}</span>
        </template>
      </el-table-column>
      <!--所属职位-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="所属职位"
        min-width="30">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.job }}</span>
        </template>
      </el-table-column>

      <!--操作-->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div class="btnBox clearfix">
            <!--查看-->

            <lookBtn btntext="查看" btnclass="chakan" @btnEvent="lookOver(scope.$index, scope.row)"
                     class="lookBtn"></lookBtn>
            <!--编辑-->
            <editBtn btntext="编辑" btnclass="bianji" @btnEvent="staffEdit(scope.$index, scope.row)"
                     class="editBtn"></editBtn>
            <!--删除-->
            <deleteBtn btntext="删除" btnclass="shanchu" @btnEvent="staffDelete(scope.$index, scope.row)"
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
  var productsMethods = {
    /*添加员工*/
    Add(index, row) {
      // console.log(index, row);
      this.$alert('<form action="" id="productForm2">\n' +
        '    <label for="">员工姓名:</label>\n' +
        '    <input type="text" placeholder="输入员工姓名" id="staffName">\n' +
        '    <br>\n' +
        '    <label for="" id="sex">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:</label>\n' +
        '    <select name="" id="productTp" >\n' +
        '        <option value="0">请选择性别</option>\n' +
        '        <option value="1">男</option>\n' +
        '        <option value="2">女</option>\n' +
        '    </select>\n' +
        '     <br>\n' +
        '    <label for="">联系方式:</label>\n' +
        '    <input type="text" placeholder="输入员工联系方式" id="staffPhone" >\n' +
        '    <br>\n' +
        '    <label for="">工作状态:</label>\n' +
        '    <select name="" id="productTp2" >\n' +
        '        <option value="0">请选择工作状态</option>\n' +
        '        <option value="1">在职</option>\n' +
        '        <option value="2">休假</option>\n' +
        '    </select>\n' +
        '    <br>\n' +
        '    <label for="">所属职位:</label>\n' +
        '    <select name="" id="productTp3" >\n' +
        '        <option value="0">请选择所属职位</option>\n' +
        '        <option value="1">经理</option>\n' +
        '        <option value="2">组长</option>\n' +
        '        <option value="1">销售经理</option>\n' +
        '        <option value="2">员工</option>\n' +
        '    </select>\n' +
        '    <br>\n' +
        '    <label for="">家庭住址:</label>\n' +
        '    <input type="text" placeholder="输入员工家庭住址" id="staffAddress">\n' +
        '    <br>\n' +
        '</form>', '新增员工', {
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        showConfirmButton: true,
        customClass: 'addProductModel addProductModel4'
      }).then(() => {
        var thisStaffTextVal = $("#productForm2 #staffName").val();//姓名
        var thisStaffPhoneVal = $("#productForm2 #staffPhone").val();//联系方式
        var thisStaffAddressVal = $("#productForm2 #staffAddress").val();//家庭住址
        var thisStaffSexVal = $("#productForm2 #productTp option:selected").text();//性别
        var thisStaffStateVal = $("#productForm2 #productTp2 option:selected").text();//工作状态
        var thisStaffJobVal = $("#productForm2 #productTp3 option:selected").text();//所属员工
        console.log(thisStaffTextVal);
        console.log(thisStaffPhoneVal);
        console.log(thisStaffAddressVal);
        console.log(thisStaffSexVal);
        console.log(thisStaffStateVal);
        console.log(thisStaffJobVal);
        if (thisStaffTextVal == "") {
          this.$message({
            type: 'info',
            message: '请输入姓名'
          });
        } else if (thisStaffPhoneVal == "") {
          this.$message({
            type: 'info',
            message: '请输入联系方式'
          });
        } else if (thisStaffAddressVal == "") {
          this.$message({
            type: 'info',
            message: '请输入地址'
          });
        } else if (thisStaffSexVal != "" && thisStaffStateVal != "" && thisStaffJobVal == 0) {
          this.$message({
            type: 'info',
            message: '请选择员工基本信息类型'
          });
        } else{
          console.log("sdfsafdsfadsa");
          this.$axios.post("/api/addStaffNews.do",{va11:thisStaffTextVal,
            va12:thisStaffPhoneVal,val3:thisStaffAddressVal,val4:thisStaffSexVal,val5:thisStaffStateVal,va16:thisStaffJobVal})
            .then((res) => {
              console.log(res.data)
              this.$message({
                type: 'info',
                message: '添加成功'
              });
              this.$axios.get("/api/loadStaff.do")
                .then((res) => {
                  // console.log(res.data)
                  var productData = res.data.map(function (item) {
                    return {
                      id: item.e_id,
                      name: item.e_name,
                      sex: item.e_sex,
                      address: item.e_address,
                      phone: item.e_phone,
                      state: item.e_state,
                      job: item.e_job
                    }
                  });
                  this.tableData = productData;
                  this.total = this.tableData.length;
                });
            });
        }
      }).catch(() => {
      });

    },
    /*批量删除*/
    handleDelete(index, row) {
      // console.log(index, row);
      this.$alert('<div class="del clearfix">\n' +
        '      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAACyklEQVQ4EaWVS0wTYRDHf/3aAqU8VaBASQB5JI0xJIqJBiMHlKMGYzyoicaLXjyZePNgYkw8cPPg0ZNRD8aDB1+JL6JRkChGA0QwBKhAsTxCgS3tOtvSpl12UeJks+33zcx/5vvvzHwOXdcxiR5nbQltgVAvwTfMDRHXKG7Ed4CKNtxFuL0ol8lJlg4z1nKIX2/5cZfxJ2jzZgdnHr42Gs9Q1Y7Xj0NlGmRi6Ux/4Pttfj5iNQwb8k37uQup7iBwAf9hySa9nYE19pi+a4T60GNpte0fyaiokZYrNJ3FsQ6Xwpp6R88lZgXIPp2NwPlVtN2i9lhSkzjw4hhfupnttwJy4Cogp8REzTpsJEj/DWY+JQlRxKNMPGPyhfXRlJvARfZ3G3AWohP+yugDtEVRKuNjjdxHm7Ow/JettWXGn7IwLKkpZnqNZ0s0ZcXQmR9m6r2cTxF8jSYV8B8SXTSKKaapRBFs5dtZBp0flN5QibK01Cc3ddYiRJeQxtpEpOH0eFYTWBgLj6shloPoUQtt9pYLlZu9Y1rFWQnjniW+aTOoHGkmaYV6k7d5KTMjKkfYFMtbJZNDUbYXA9VGhKapHmNsSEnbicNFaQDlVviPUFhrZ2YkXtzE9hac9lR4Kqhsx5mnKKjB32mbmqTccIrdl8kptY7ncFLeyrZdEtUleNSfIPiS3wMW1jJRR+7hLrBtMo+PuuN4q8VXGaco30fzeXKtIgtf4W9MfyS2YhFJsq7rovaokJXAkpdw0XyOhtO48i0cjC2rxpAz+TvYcxUZswlJzUJZyMD4fJOhO0Qm/9bqDjxlxghsvU7ejiSQvDOwZCVFNPrQeCaeszJjnY7cQ76D1Hex8yQubxpoA5ah0YlMEx5g8pUxI+cGia0azSg8FNVReYiaTkoCeGtQzkwgS6yUgZAdjaBrCa5044KQmhRCnZ70ZZEyXf/9AwLpAEG3+zEQAAAAAElFTkSuQmCC">\n' +
        '      <p>确认删除?</p>\n' +
        '     </div>', '提示', {
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        customClass: 'deleteProduct'
      }).then(()=> {
        var idArray=[];
        for(var i=0;i<$("label .is-checked").length;i++){
          idArray.push($("label .is-checked").eq(i).parent().parent().parent().parent().children().eq(1).text());
        }
        console.log(typeof idArray[0])
        if(idArray[0]=='ID'){
          idArray.splice(0,1);
        }
        console.log(idArray);
        this.$axios.get("/api/handleDelete.do",{params:{idArray:idArray}})
          .then(()=> {
            this.$axios.get("/api/loadStaff.do")
              .then((res) => {
                // console.log(res.data)
                var productData = res.data.map(function (item) {
                  return {
                    id: item.e_id,
                    name: item.e_name,
                    sex: item.e_sex,
                    address: item.e_address,
                    phone: item.e_phone,
                    state: item.e_state,
                    job: item.e_job
                  }
                });
                this.tableData = productData;
                this.total = this.tableData.length;
              })
          })
      }).catch(() => {
      });

    },

    rowClass(index, row) {
      return 'text-align:center;font-size:12px;color:#684029'
    },
    cellStyle() {
      return 'font-size:12px;color:#684029;padding:0;height:45px'
    },
    /*查看员工*/
    lookOver(index, row) {
      var id=row.id;
      var sex=row.sex;
      var job=row.job;
      var state=row.state
      var name = row.name;
      var phone = row.phone;
      var address = row.address;
      this.$alert('<form action="" id="productForm">\n' +
        '    <label for="">员工姓名:</label>\n' +
        '    <input type="text"  readonly id="staffName" value=' + name + '>\n' +
        '    <br>\n' +
        '    <label for="" id="sex">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:</label>\n' +
        '    <input type="text" readonly id="staffSex" value=' + sex + '>\n' +
        '     <br>\n' +
        '    <label for="">联系方式:</label>\n' +
        '    <input type="text" readonly  id="staffPhone" value=' + phone + '>\n' +
        '    <br>\n' +
        '    <label for="">工作状态:</label>\n' +
        '    <input type="text" readonly id="staffState" value=' + state + '>\n' +
        '    <br>\n' +
        '    <label for="">所属职位:</label>\n' +
        '    <input type="text" readonly id="staffJob" value=' + job + '>\n' +
        '    <br>\n' +
        '    <label for="">家庭住址:</label>\n' +
        '    <input type="text" readonly id="staffAddress" value=' + address + '>\n' +
        '    <br>\n' +
        '</form>', '查看', {
        dangerouslyUseHTMLString: true,
        showCancelButton: false,
        showConfirmButton: true,
        customClass: 'addProductModel addProductModel4'
      }).catch(() => {
      });
    },
    /*编辑员工*/
    staffEdit(index, row) {
      // console.log(index, row);
      var id=row.id;
      var name = row.name;
      var phone = row.phone;
      var address = row.address;
      var sex=row.sex;
      var state=row.state;
      var job=row.job;
      if (sex=="男"){
        var tp1="selected"
      } else if (sex=="女"){
        var tp2="selected"
      }
      if (state=="在职"){
        var tp3="selected"
      }else if (state=="休假"){
        var tp4="selected";
      }

      if (job=="经理"){
        var tp5="selected";
      }else if (job=="组长"){
        var tp6="selected";
      } else if (job=="销售经理"){
        var tp7="selected";
      } else if (job=="员工"){
        var tp8="selected";
      }

      this.$alert('<form action="" id="productForm2">\n' +
        '    <label for="">员工姓名:</label>\n' +
        '    <input type="text" placeholder="输入员工姓名" id="staffName" value=' + name + '>\n' +
        '    <br>\n' +
        '    <label for="" id="sex">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:</label>\n' +
        '    <select name="" id="productTp" >\n' +
        '        <option value="0">请选择性别</option>\n' +
        '        <option value="1" '+tp1+'>男</option>\n' +
        '        <option value="2" '+tp2+'>女</option>\n' +
        '    </select>\n' +
        '     <br>\n' +
        '    <label for="">联系方式:</label>\n' +
        '    <input type="text" placeholder="输入员工联系方式" id="staffPhone" value=' + phone + '>\n' +
        '    <br>\n' +
        '    <label for="">工作状态:</label>\n' +
        '    <select name="" id="productTp2" >\n' +
        '        <option value="0">请选择工作状态</option>\n' +
        '        <option value="1" '+tp3+'>在职</option>\n' +
        '        <option value="2" '+tp4+'>休假</option>\n' +
        '    </select>\n' +
        '    <br>\n' +
        '    <label for="">所属职位:</label>\n' +
        '    <select name="" id="productTp3" >\n' +
        '        <option value="0">请选择所属职位</option>\n' +
        '        <option value="1" '+tp5+'>经理</option>\n' +
        '        <option value="2" '+tp6+'>组长</option>\n' +
        '        <option value="1" '+tp7+'>销售经理</option>\n' +
        '        <option value="2" '+tp8+'>员工</option>\n' +
        '    </select>\n' +
        '    <br>\n' +
        '    <label for="">家庭住址:</label>\n' +
        '    <input type="text" placeholder="输入员工家庭住址" id="staffAddress" value=' + address + '>\n' +
        '    <br>\n' +
        '</form>', '编辑员工', {
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        showConfirmButton: true,
        customClass: 'addProductModel addProductModel4'
      }).then(() => {
        var thisStaffTextVal = $("#productForm2 #staffName").val();//姓名
        var thisStaffPhoneVal = $("#productForm2 #staffPhone").val();//联系方式
        var thisStaffAddressVal = $("#productForm2 #staffAddress").val();//家庭住址
        var thisStaffSexVal = $("#productForm2 #productTp option:selected").text();//性别
        var thisStaffStateVal = $("#productForm2 #productTp2 option:selected").text();//工作状态
        var thisStaffJobVal = $("#productForm2 #productTp3 option:selected").text();//所属员工
        if (thisStaffTextVal == "") {
          this.$message({
            type: 'info',
            message: '请输入姓名',
          })
        } else if (thisStaffPhoneVal == "") {
          this.$message({
            type: 'info',
            message: '请输入联系方式'
          })
        } else if (thisStaffAddressVal == "") {
          this.$message({
            type: 'info',
            message: '请输入地址'
          });
        } else if (thisStaffSexVal == "请选择性别" || thisStaffStateVal == "请选择工作状态" || thisStaffJobVal == "请选择所属职位") {
          this.$message({
            type: 'info',
            message: '请选择员工基本信息类型'
          });
        } else{
          this.$axios.post("/api/changeStaffNews.do",{va10:row.id,va11:thisStaffTextVal,
            va12:thisStaffPhoneVal,val3:thisStaffAddressVal,val4:thisStaffSexVal,val5:thisStaffStateVal,va16:thisStaffJobVal})
            .then((res) => {
              // console.log(res.data)
              this.$message({
                type: 'info',
                message: '修改成功'
              });
              this.$axios.get("/api/loadStaff.do")
                .then((res) => {
                  // console.log(res.data)
                  var productData = res.data.map(function (item) {
                    return {
                      id: item.e_id,
                      name: item.e_name,
                      sex: item.e_sex,
                      address: item.e_address,
                      phone: item.e_phone,
                      state: item.e_state,
                      job: item.e_job
                    }
                  });
                  this.tableData = productData;
                  this.total = this.tableData.length;
                });
            });
        }
      }).catch(() => {
      });
    },

    /*删除员工*/
    staffDelete(index, row) {
      var id=row.id;
      console.log();
      this.$alert('<div class="del clearfix">\n' +
        '      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAACyklEQVQ4EaWVS0wTYRDHf/3aAqU8VaBASQB5JI0xJIqJBiMHlKMGYzyoicaLXjyZePNgYkw8cPPg0ZNRD8aDB1+JL6JRkChGA0QwBKhAsTxCgS3tOtvSpl12UeJks+33zcx/5vvvzHwOXdcxiR5nbQltgVAvwTfMDRHXKG7Ed4CKNtxFuL0ol8lJlg4z1nKIX2/5cZfxJ2jzZgdnHr42Gs9Q1Y7Xj0NlGmRi6Ux/4Pttfj5iNQwb8k37uQup7iBwAf9hySa9nYE19pi+a4T60GNpte0fyaiokZYrNJ3FsQ6Xwpp6R88lZgXIPp2NwPlVtN2i9lhSkzjw4hhfupnttwJy4Cogp8REzTpsJEj/DWY+JQlRxKNMPGPyhfXRlJvARfZ3G3AWohP+yugDtEVRKuNjjdxHm7Ow/JettWXGn7IwLKkpZnqNZ0s0ZcXQmR9m6r2cTxF8jSYV8B8SXTSKKaapRBFs5dtZBp0flN5QibK01Cc3ddYiRJeQxtpEpOH0eFYTWBgLj6shloPoUQtt9pYLlZu9Y1rFWQnjniW+aTOoHGkmaYV6k7d5KTMjKkfYFMtbJZNDUbYXA9VGhKapHmNsSEnbicNFaQDlVviPUFhrZ2YkXtzE9hac9lR4Kqhsx5mnKKjB32mbmqTccIrdl8kptY7ncFLeyrZdEtUleNSfIPiS3wMW1jJRR+7hLrBtMo+PuuN4q8VXGaco30fzeXKtIgtf4W9MfyS2YhFJsq7rovaokJXAkpdw0XyOhtO48i0cjC2rxpAz+TvYcxUZswlJzUJZyMD4fJOhO0Qm/9bqDjxlxghsvU7ejiSQvDOwZCVFNPrQeCaeszJjnY7cQ76D1Hex8yQubxpoA5ah0YlMEx5g8pUxI+cGia0azSg8FNVReYiaTkoCeGtQzkwgS6yUgZAdjaBrCa5044KQmhRCnZ70ZZEyXf/9AwLpAEG3+zEQAAAAAElFTkSuQmCC">\n' +
        '      <p>确认删除?</p>\n' +
        '     </div>', '提示', {
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        customClass: 'deleteProduct'
      }).then(()=> {
        this.$axios.get("/api/dellStaff.do",{params:{id:id}})
          .then(()=>{
            this.$axios.get("/api/loadStaff.do")
              .then((res) => {
                // console.log(res.data)

                var productData = res.data.map(function (item) {
                  return {
                    id: item.e_id,
                    name: item.e_name,
                    sex: item.e_sex,
                    address: item.e_address,
                    phone:item.e_phone,
                    state:item.e_state,
                    job:item.e_job
                  }
                });
                this.tableData = productData;
                this.total = this.tableData.length;
              })
          });
      }).catch(() => {
      });
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    /*查询员工*/
    filterSearchText(val) {
      var searchVal = val;
      // console.log(searchVal);
      var result = this.tableData.filter((value) => {
        var searchValue = value.name.indexOf(searchVal);
        return searchValue != -1;
        /*不符合返回-1，符合返回搜索的*/
      });
      if (val != "") {
        return this.tableData = result;
      } else if (val == "") {
        this.$axios.get("/api/loadStaff.do")
          .then((res) => {
            // console.log(res.data)
            var productData = res.data.map(function (item) {
              return {
                id: item.e_id,
                name: item.e_name,
                sex: item.e_sex,
                address: item.e_address,
                phone:item.e_phone,
                state:item.e_state,
                job:item.e_job
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
        tableData: []
      }
    },
    methods: productsMethods,
    created() {
      // console.log(this);
      /*加载数据库的员工*/
      this.$axios.get("/api/loadStaff.do")
        .then((res) => {
          // console.log(res.data)

          var productData = res.data.map(function (item) {
            return {
              id: item.e_id,
              name: item.e_name,
              sex: item.e_sex,
              address: item.e_address,
              phone:item.e_phone,
              state:item.e_state,
              job:item.e_job
            }
          });
          this.tableData = productData;
          this.total = this.tableData.length;

        })
    },

  }

</script>

<style>
  @import "../../assets/tankuang-4.css";
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
