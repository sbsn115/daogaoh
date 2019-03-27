<template>
  <div id="app">
    <myModel selfModalStyle="self-modal" v-if="isShow">
      <div slot="modelContent" class="modelContent">
        <div class="modal_header">新增企业
          <i class="closeBtn" @click="closeModal">X</i>
        </div>
        <form action="" id="productForm">
          <label>企业名称:</label>
          <input type="text" placeholder="输入企业名称" id="name">
          <br>
          <label>企业地址:</label>
          <input type="text" placeholder="输入企业地址" id="address">
          <br>
          <label>联系人名:</label>
          <input type="text" placeholder="输入联系人" id="contact">
          <br>
          <label>联系方式:</label>
          <input type="text" placeholder="请输入联系方式" id="phone">
          <br>
          <label>企业证明:</label>
          <input type="file" name="file" @change="getFile($event)" id="file">
          <p class="prompt">! 请输入商品名</p>
          <br/>
          <div class="btn_box clearfix">
            <button @click="submitForm($event)">确定</button>
            <button type="button" @click="closeModal">取消</button>
          </div>
        </form>
      </div>
    </myModel>
    <div class="table_topNav">
      <div class="table_topNavContent_left">企业联系</div>
      <div class="table_topNavContent_right">

        <div class="searchBox">
          <searchBox placeH="请输入企业名" @getSearchText="filterSearchText"></searchBox>
        </div>
        <div class="addBtn">
          <addBtn btntext="新增" btnclass="xinzeng" style="margin: -5px 0 0 0;float: left;"
                  @btnEvent="addContact"></addBtn>

          <deleteBtn btntext="批量删除" btnclass="shanchu" @btnEvent="delete_contact_all"
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
      <!--企业ID-->
      <el-table-column
        align="center"
        label="企业ID"
        min-width="30">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <!--企业名-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="企业名"
        min-width="40">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <!--企业地址-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="企业地址"
        min-width="50">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <!--商品价格-->
      <el-table-column
        align="center"
        label="联系人"
        min-width="40">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.contact }}</span>
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
      <!--示例图-->
      <el-table-column
        align="center"
        label="企业证明"
        min-width="40">
        <template slot-scope="scope">
                    <span><img :src="'/api/'+scope.row.imgSrc1" alt=""
                               style="width: 46px;height: 42px;"></span>
          <input type="file" class="changPic" @change="changePic($event)" :b_id="scope.row.id" style="position: absolute;
                                left: 0;height: 42px;top: 10px;opacity: 0"/>
        </template>
      </el-table-column>
      <!--操作-->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div class="btnBox clearfix">
            <!--查看-->

            <lookBtn btntext="查看" btnclass="chakan" @btnEvent="lookContact(scope.$index, scope.row)"
                     class="lookBtn"></lookBtn>
            <!--编辑-->
            <editBtn btntext="编辑" btnclass="bianji" @btnEvent="contactEdit(scope.$index, scope.row)"
                     class="editBtn"></editBtn>
            <!--删除-->
            <deleteBtn btntext="删除" btnclass="shanchu" @btnEvent="delete_contact(scope.$index, scope.row)"
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
    /*模态框的按钮绑定的方法*/
    /*上传图片按钮*/
    getFile(event) {
      this.file = event.target.files[0];
    },
    submitForm(event) {
      event.preventDefault();
      const thisBtn = event.target;
      const thisForm = $(thisBtn).parent().parent();
      const name = thisForm.find("#name").val()
      const address = thisForm.find("#address").val()
      const contact = thisForm.find("#contact").val()
      const phone = thisForm.find("#phone").val()

      let formData = new FormData();
      formData.append('file', this.file);
      formData.append('val1', name);
      formData.append('val2', address);
      formData.append('val3', contact);
      formData.append('val4', phone);
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      this.$axios.post("/api/addContact.do", formData, config)
        .then((res) => {
          console.log(res.data);
          this.isShow = "";
          this.$axios.get("/api/contact1.do")
            .then((res) => {
              // console.log(res.data)
              var productData = res.data.map(function (item) {
                return {
                  id: item.b_id,
                  name: item.b_name,
                  imgSrc1: item.b_prove,
                  contact: item.b_contact,
                  address: item.b_address,
                  phone: item.b_phone,
                }
              });
              this.tableData = productData;
              this.total = this.tableData.length;
            });
        })


    },
    closeModal() {
      /*关闭模态框*/
      this.isShow = "";
    },
    addContact() {
      /*启动模态框*/
      this.isShow = "true";
    },


    handleEdit(index, row) {
      console.log(index, row);
    },

    /*批量删除*/
    delete_contact_all(index, row) {
      this.$alert('<div class="shanchu clearfix">\n' +
        '        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAACyklEQVQ4EaWVS0wTYRDHf/3aAqU8VaBASQB5JI0xJIqJBiMHlKMGYzyoicaLXjyZePNgYkw8cPPg0ZNRD8aDB1+JL6JRkChGA0QwBKhAsTxCgS3tOtvSpl12UeJks+33zcx/5vvvzHwOXdcxiR5nbQltgVAvwTfMDRHXKG7Ed4CKNtxFuL0ol8lJlg4z1nKIX2/5cZfxJ2jzZgdnHr42Gs9Q1Y7Xj0NlGmRi6Ux/4Pttfj5iNQwb8k37uQup7iBwAf9hySa9nYE19pi+a4T60GNpte0fyaiokZYrNJ3FsQ6Xwpp6R88lZgXIPp2NwPlVtN2i9lhSkzjw4hhfupnttwJy4Cogp8REzTpsJEj/DWY+JQlRxKNMPGPyhfXRlJvARfZ3G3AWohP+yugDtEVRKuNjjdxHm7Ow/JettWXGn7IwLKkpZnqNZ0s0ZcXQmR9m6r2cTxF8jSYV8B8SXTSKKaapRBFs5dtZBp0flN5QibK01Cc3ddYiRJeQxtpEpOH0eFYTWBgLj6shloPoUQtt9pYLlZu9Y1rFWQnjniW+aTOoHGkmaYV6k7d5KTMjKkfYFMtbJZNDUbYXA9VGhKapHmNsSEnbicNFaQDlVviPUFhrZ2YkXtzE9hac9lR4Kqhsx5mnKKjB32mbmqTccIrdl8kptY7ncFLeyrZdEtUleNSfIPiS3wMW1jJRR+7hLrBtMo+PuuN4q8VXGaco30fzeXKtIgtf4W9MfyS2YhFJsq7rovaokJXAkpdw0XyOhtO48i0cjC2rxpAz+TvYcxUZswlJzUJZyMD4fJOhO0Qm/9bqDjxlxghsvU7ejiSQvDOwZCVFNPrQeCaeszJjnY7cQ76D1Hex8yQubxpoA5ah0YlMEx5g8pUxI+cGia0azSg8FNVReYiaTkoCeGtQzkwgS6yUgZAdjaBrCa5044KQmhRCnZ70ZZEyXf/9AwLpAEG3+zEQAAAAAElFTkSuQmCC">\n' +
        '        <p>确认删除</p>\n' +
        '    </div>', '提示', {
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        customClass: 'shanzeng'
      }).then(() => {
        var idArray = [];
        for (var i = 0; i < $("label .is-checked").length; i++) {
          idArray.push($("label .is-checked").eq(i).parent().parent().parent().parent().children().eq(1).text());
        }
        if (idArray[0] == 'ID') {
          idArray.splice(0, 1);
        }
        this.$axios.get("/api/delete_contact_all.do", {params: {idArray: idArray}})
          .then(() => {
            this.$axios.get("/api/contact1.do")
              .then((res) => {
                // console.log(res.data)
                var productData = res.data.map(function (item) {
                  return {
                    id: item.b_id,
                    name: item.b_name,
                    imgSrc1: item.b_prove,
                    contact: item.b_contact,
                    address: item.b_address,
                    phone: item.b_phone,
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

    /*查看数据*/
    lookContact(index, row) {
      const name = row.name
      const address = row.address
      const contact = row.contact
      const phone = row.phone
      const img = row.imgSrc1
      this.$alert('<div class="zenjia">\n' +
        '    <div>\n' +
        '        <span style="display:inline-block;width: 70px;height: 19px">企业名：</span>\n' +
        '        <input type="text" class="name" readonly value=' + name + '>\n' +
        '    </div>\n' +
        '    <div>\n' +
        '        <span>企业地址：</span>\n' +
        '        <input type="text" class="address" readonly value=' + address + '>\n' +
        '    </div>\n' +
        '    <div>\n' +
        '        <span style="display:inline-block;width: 70px;height: 19px">联系人：</span>\n' +
        '        <input type="text" class="contact" readonly value=' + contact + '>\n' +
        '    </div>\n' +
        '    <div>\n' +
        '        <span>联系方式：</span>\n' +
        '        <input type="text" class="phone" readonly value=' + phone + '>\n' +
        '    </div>\n' +
        '    <div>' +
        '        <span>企业证明：</span>' +
        '        <img src=' + "/api" + img + ' style=" margin:6px 0 0 0;width: 35px ;height:30px;vertical-align: middle;">' +
        '    </div>' +
        '</div>', '查看企业', {
        dangerouslyUseHTMLString: true,
        showCancelButton: false,
        customClass: 'bianzengcha concatNews'
      }).catch(() => {
      });
    },

    /*编辑数据*/
    contactEdit(index, row) {

      const name = row.name
      const address = row.address
      const contact = row.contact
      const phone = row.phone
      const img = row.imgSrc1
      this.$alert('<div class="zenjia">\n' +
        '    <div>\n' +
        '        <span style="display:inline-block;width: 70px;height: 19px">企业名：</span>\n' +
        '        <input type="text" class="name" value=' + name + '>\n' +
        '    </div>\n' +
        '    <div>\n' +
        '        <span>企业地址：</span>\n' +
        '        <input type="text" class="address" value=' + address + '>\n' +
        '    </div>\n' +
        '    <div>\n' +
        '        <span style="display:inline-block;width: 70px;height: 19px">联系人：</span>\n' +
        '        <input type="text" class="contact" value=' + contact + '>\n' +
        '    </div>\n' +
        '    <div>\n' +
        '        <span>联系方式：</span>\n' +
        '        <input type="text" class="phone" value=' + phone + '>\n' +
        '    </div>\n' +
        '</div>', '编辑企业', {
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        customClass: 'bianzengcha concatNews'
      }).then(() => {
        var name = $(".name").val()
        var address = $(".address").val()
        var contact = $(".contact").val()
        var phone = $(".phone").val()
        var id = row.id

        this.$axios.get("/api/contactEdit.do", {
          params: {
            name: name,
            address: address,
            contact: contact,
            phone: phone,
            id: id,
          }
        }).then(() => {
          this.$axios.get("/api/contact1.do")
            .then((res) => {
              // console.log(res.data)

              var productData = res.data.map(function (item) {
                return {
                  id: item.b_id,
                  name: item.b_name,
                  imgSrc1: item.b_prove,
                  contact: item.b_contact,
                  address: item.b_address,
                  phone: item.b_phone,
                }
              });
              this.tableData = productData;
              this.total = this.tableData.length;
            })
        });
      }).catch(() => {
      });
    },

    changePic(event) {
      this.file = event.target.files[0];
      this.b_id = event.target.getAttribute('b_id');
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      let formData = new FormData();
      formData.append('file', this.file);
      formData.append('b_id', this.b_id);
      this.$axios.post("/api/changePic.do", formData, config)
        .then((res) => {
          // console.log(res.data);
          this.$axios.get("/api/contact1.do")
            .then((res) => {
              // console.log(res.data)
              var productData = res.data.map(function (item) {
                return {
                  id: item.b_id,
                  name: item.b_name,
                  imgSrc1: item.b_prove,
                  contact: item.b_contact,
                  address: item.b_address,
                  phone: item.b_phone,
                }
              });
              this.tableData = productData;
              this.total = this.tableData.length;
            });
        })
    },

    /*删除*/
    delete_contact(index, row) {
      // console.log(index, row);
      var id = row.id;
      console.log(id);
      this.$alert('<div class="shanchu clearfix">\n' +
        '        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAACyklEQVQ4EaWVS0wTYRDHf/3aAqU8VaBASQB5JI0xJIqJBiMHlKMGYzyoicaLXjyZePNgYkw8cPPg0ZNRD8aDB1+JL6JRkChGA0QwBKhAsTxCgS3tOtvSpl12UeJks+33zcx/5vvvzHwOXdcxiR5nbQltgVAvwTfMDRHXKG7Ed4CKNtxFuL0ol8lJlg4z1nKIX2/5cZfxJ2jzZgdnHr42Gs9Q1Y7Xj0NlGmRi6Ux/4Pttfj5iNQwb8k37uQup7iBwAf9hySa9nYE19pi+a4T60GNpte0fyaiokZYrNJ3FsQ6Xwpp6R88lZgXIPp2NwPlVtN2i9lhSkzjw4hhfupnttwJy4Cogp8REzTpsJEj/DWY+JQlRxKNMPGPyhfXRlJvARfZ3G3AWohP+yugDtEVRKuNjjdxHm7Ow/JettWXGn7IwLKkpZnqNZ0s0ZcXQmR9m6r2cTxF8jSYV8B8SXTSKKaapRBFs5dtZBp0flN5QibK01Cc3ddYiRJeQxtpEpOH0eFYTWBgLj6shloPoUQtt9pYLlZu9Y1rFWQnjniW+aTOoHGkmaYV6k7d5KTMjKkfYFMtbJZNDUbYXA9VGhKapHmNsSEnbicNFaQDlVviPUFhrZ2YkXtzE9hac9lR4Kqhsx5mnKKjB32mbmqTccIrdl8kptY7ncFLeyrZdEtUleNSfIPiS3wMW1jJRR+7hLrBtMo+PuuN4q8VXGaco30fzeXKtIgtf4W9MfyS2YhFJsq7rovaokJXAkpdw0XyOhtO48i0cjC2rxpAz+TvYcxUZswlJzUJZyMD4fJOhO0Qm/9bqDjxlxghsvU7ejiSQvDOwZCVFNPrQeCaeszJjnY7cQ76D1Hex8yQubxpoA5ah0YlMEx5g8pUxI+cGia0azSg8FNVReYiaTkoCeGtQzkwgS6yUgZAdjaBrCa5044KQmhRCnZ70ZZEyXf/9AwLpAEG3+zEQAAAAAElFTkSuQmCC">\n' +
        '        <p>确认删除</p>\n' +
        '    </div>', '提示', {
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        customClass: 'shanzeng'
      }).then(() => {
        this.$axios.get("/api/delete_contact.do", {params: {id: id}})
          .then(() => {
            this.$axios.get("/api/contact1.do")
              .then((res) => {
                // console.log(res.data)

                var productData = res.data.map(function (item) {
                  return {
                    id: item.b_id,
                    name: item.b_name,
                    imgSrc1: item.b_prove,
                    contact: item.b_contact,
                    address: item.b_address,
                    phone: item.b_phone,
                  }
                });
                this.tableData = productData;
                this.total = this.tableData.length;
              })
          });

      })
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

    /*搜索*/
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
        this.$axios.get("/api/contact1.do")
          .then((res) => {
            // console.log(res.data)
            var productData = res.data.map(function (item) {
              return {
                id: item.b_id,
                name: item.b_name,
                imgSrc1: item.b_prove,
                contact: item.b_contact,
                address: item.b_address,
                phone: item.b_phone,
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
    name: 'Contact',
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
        isShow: ""
      }
    },
    methods: productsMethods,
    created() {
      /*加载数据库的商品*/
      this.$axios.get("/api/contact1.do")
        .then((res) => {
          console.log(res.data)
          var productData = res.data.map(function (item) {
            return {
              id: item.b_id,
              name: item.b_name,
              imgSrc1: item.b_prove,
              contact: item.b_contact,
              address: item.b_address,
              phone: item.b_phone,
            }
          });
          this.tableData = productData;
          this.total = this.tableData.length;
          // console.log(productData[0].name)

        })

    }

  }

</script>

<style>
  @import "../../assets/tankuang-3.css";
  @import "../../assets/tankuang-3-2.css";
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

  #productForm {
    color: #684029;
    font-size: 14px;
  }

  #productForm #name,
  #productForm #address,
  #productForm #contact,
  #productForm #phone {
    height: 25px;
    width: 200px;
    margin-left: 10px;
    margin-bottom: 15px;
    box-sizing: border-box;
    outline: none;
    border: .5px solid rgba(0, 0, 0, 0.4);
  }

  #productForm {
    text-align: left;
    padding: 10px 30px 20px;
  }

  .bianzengcha {
    height: auto;
    width: 390px;
    color: #684029;

  }

  .zenjia {
    color: #684029;
    font-size: 14px;
  }

</style>
