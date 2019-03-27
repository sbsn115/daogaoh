<template>
  <div id="app">

    <!--增加商品模态框-->
    <myModel selfModalStyle="self-modal" v-if="isShow">
      <div slot="modelContent" class="modelContent">
        <div class="modal_header">增加商品
          <i class="closeBtn" @click="closeModal">X</i>
        </div>
        <form action="" id="productForm">
          <label for="">商品名称:</label>
          <input type="text" placeholder="输入商品名称" id="productText">
          <br>
          <label for="">商品价格:</label>
          <input type="text" placeholder="输入商品价格" id="productPrice">
          <br>
          <label for="">商品类型:</label>
          <select name="" id="productTp">
            <option value="0">请选择商品类型</option>
            <option value="1">蛋糕</option>
            <option value="2">冰淇淋</option>
            <option value="3">咖啡</option>
            <option value="4">面包</option>
            <option value="5">礼品</option>
            <option value="6">常温蛋糕</option>
          </select>
          <br>
          <div class="textArea clearfix">
            <label for="">商品描述:</label>
            <textarea name="" id="productDescription" cols="30" rows="10" placeholder="输入商品描述"></textarea>
          </div>
          <br>
          <label for="">上传图片:</label>
          <input type="file" name="file" @change="getFile($event)" id="file">
          <p class="prompt">! 请输入商品名</p>
          <div class="btn_box clearfix">
            <button @click="submitForm($event)">确定</button>
            <button type="button" @click="closeModal">取消</button>
          </div>
        </form>
      </div>
    </myModel>

    <div class="table_topNav">
      <div class="table_topNavContent_left">商品表</div>
      <div class="table_topNavContent_right">
        <div class="selectMenu">
          <selectMenu @searchEvent="onSearch" :options1="optionsList" placeHolder="选择商品类型"></selectMenu>
        </div>
        <div class="searchBox">
          <searchBox placeH="输入商品名/商品ID" @getSearchText="filterSearchText"></searchBox><!--:searchText="searchText"-->
        </div>
        <div class="addBtn">
          <addBtn btntext="新增" btnclass="xinzeng" style="margin: -5px 0 0 0;float: left;"
                  @btnEvent="addProduct"></addBtn>

          <deleteBtn btntext="批量删除" btnclass="shanchu" @btnEvent="productsDelete"
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
        min-width="10">
      </el-table-column>
      <!--商品ID-->
      <el-table-column
        align="center"
        label="商品ID"
        min-width="26">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <!--商品名-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="商品名"
        min-width="40">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <!--商品描述-->
      <el-table-column
        show-overflow-tooltip
        align="center"
        label="商品描述"
        min-width="100">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.description }}</span>
        </template>
      </el-table-column>
      <!--商品价格-->
      <el-table-column
        align="center"
        label="商品价格(单位/元)"
        min-width="40">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{ scope.row.price }}</span>
        </template>
      </el-table-column>
      <!--示例图-->
      <el-table-column
        align="center"
        label="示例图(可更改)"
        min-width="50">
        <template slot-scope="scope">
          <!--<span><img src="../../assets/images(products)/7.png" alt="" style="width: 46px;height: 42px;"></span>-->
          <span>
            <img :src="'/api/'+scope.row.imgSrc1" alt="" style="width: 46px;height: 42px;cursor: pointer">
            <input type="file" @change="changeImg($event)" :goods_id="scope.row.id" class="changeImg" title="点击修改图片">
          </span>
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
            <editBtn btntext="编辑" btnclass="bianji" @btnEvent="productEdit(scope.$index, scope.row)"
                     class="editBtn"></editBtn>
            <!--删除-->
            <deleteBtn btntext="删除" btnclass="shanchu" @btnEvent="productDelete(scope.$index, scope.row)"
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
                  price: "￥" + item.goods_price,
                  description: item.goods_description
                }
              });
              this.tableData = productData;
              this.total = this.tableData.length;
            });
        })


    },

    /*模态框的按钮绑定的方法*/
    /*上传图片按钮*/
    getFile(event) {
      this.file = event.target.files[0];
    },
    /*确认按钮*/
    submitForm(event) {
      event.preventDefault();
      const thisBtn = event.target;
      const thisForm = $(thisBtn).parent().parent();
      const thisInput = thisForm.find("input");
      const thisSelect = thisForm.find("#productTp");
      const thisTextArea = thisForm.find("#productDescription");
      const productTextVal = thisForm.find("#productText").val();
      const productPriceVal = thisForm.find("#productPrice").val();
      const productTpVal = thisForm.find("#productTp option:selected").val();
      const productDescriptionVal = thisForm.find("#productDescription").val();
      const promptText = thisForm.find(".prompt");
      thisInput.focus(function () {
        promptText.hide();
      });
      thisSelect.focus(function () {
        promptText.hide();
      });
      thisTextArea.focus(function () {
        promptText.hide();
      });

      if (productTextVal == "") {
        promptText.show();
        promptText.text("输入商品名");
        return false;
      } else if (productTextVal != "" && productPriceVal == "") {
        promptText.show();
        promptText.text("输入价格");
        return false;
      } else if (productTextVal != "" && productPriceVal != "" && productTpVal == 0) {
        promptText.show();
        promptText.text("选择商品类型");
        return false;
      } else if (productTextVal != "" && productPriceVal != "" && productTpVal != 0) {
        let formData = new FormData();
        formData.append('file', this.file);
        formData.append('val1', productTextVal);
        formData.append('val2', productPriceVal);
        formData.append('val3', productTpVal);
        formData.append('val4', productDescriptionVal);
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        };
        this.$axios.post("/api/addProduct.do", formData, config)
          .then((res) => {
            console.log(res.data);
            this.isShow = "";
            this.$axios.get("/api/loadGoods.do")
              .then((res) => {
                // console.log(res.data)
                var productData = res.data.map(function (item) {
                  return {
                    id: item.goods_id,
                    name: item.goods_name,
                    imgSrc1: item.goods_img,
                    price: "￥" + item.goods_price,
                    description: item.goods_description
                  }
                });
                this.tableData = productData;
                this.total = this.tableData.length;
              });
          })
      }

    },
    closeModal() {
      /*关闭模态框*/
      this.isShow = "";
    },

    rowClass(index, row) {
      return 'text-align:center;font-size:12px;color:#684029'
    },
    cellStyle() {
      return 'font-size:12px;color:#684029;padding:0;height:45px'
    },
    addProduct() {
      /*启动模态框*/
      this.isShow = "true";
    },

    lookOver(index, row) {
      var des = row.description;
      var imgSrc1 = row.imgSrc1;
      var name = row.name;
      var price = row.price;
      var tp = row.tp;
      if (tp == 1) {
        tp = "蛋糕";
      } else if (tp == 2) {
        tp = "冰淇淋";
      } else if (tp == 3) {
        tp = "咖啡下午茶";
      } else if (tp == 4) {
        tp = "面包";
      } else if (tp == 5) {
        tp = "设计师礼品";
      } else if (tp == 6) {
        tp = "常温面包";
      }
      this.$alert('<form action="" id="productForm2">\n' +
        '    <label for="">商品名称:</label>\n' +
        '    <input type="text" id="productText" readonly value=' + name + '>\n' +
        '    <br>\n' +
        '    <label for="">商品价格:</label>\n' +
        '    <input type="text" id="productPrice" readonly value=' + price + '>\n' +
        '    <br>\n' +
        '    <label for="">商品类型:</label>\n' +
        '    <input type="text" id="productPrice" readonly value=' + tp + '>\n' +
        '    <br>\n' +
        '    <div class="textArea clearfix">\n' +
        '        <label for="">商品描述:</label>\n' +
        '        <textarea name="" id="productDescription" cols="30" rows="10" placeholder="输入商品描述" readonly>' + des + '</textarea>\n' +
        '    </div>\n' +
        '    <label for="" style="margin-top:10px;float: left;">示&nbsp;&nbsp;例&nbsp;&nbsp;图:</label>\n' +
        '    <img src=' + "/api" + imgSrc1 + ' style="margin:6px 0 0 10px;width: 35px ;height:30px;float: left;">\n' +
        '</form>', '查看商品', {
        dangerouslyUseHTMLString: true,
        showCancelButton: false,
        showConfirmButton: false,
        customClass: 'addProductModel'
      }).catch(() => {
      });
    },
    productEdit(index, row) {
      console.log(index, row);
      var des = row.description;
      var name = row.name;
      var price = row.price.split("￥")[1];
      var tp = row.tp;
      var id = row.id;
      console.log(tp)
      if (tp==1){
        var tp1="selected";
      } else if (tp==2){
        var tp2="selected";
      }else if (tp==3){
        var tp3="selected";
      }else if (tp==4){
        var tp4="selected";
      }else if (tp==5){
        var tp5="selected";
      }else if (tp==6){
        var tp6="selected";
      }
      if (des==null){
        des=""
      }
      this.$alert('<form action="" id="productForm2">\n' +
        '    <label for="">商品名称:</label>\n' +
        '    <input type="text" placeholder="输入商品名称" id="productText" value=' + name + '>\n' +
        '    <br>\n' +
        '    <label for="">商品价格:</label>\n' +
        '    <input type="text" placeholder="输入商品价格" id="productPrice" value=' + price + '>\n' +
        '    <br>\n' +
        '    <label for="">商品类型:</label>\n' +
        '    <select name="" id="productTp" >\n' +
        '        <option value="0">请选择商品类型</option>\n' +
        '        <option value="1" '+tp1+'>蛋糕</option>\n' +
        '        <option value="2" '+tp2+'>冰淇淋</option>\n' +
        '        <option value="3" '+tp3+'>咖啡</option>\n' +
        '        <option value="4" '+tp4+'>面包</option>\n' +
        '        <option value="5" '+tp5+'>礼品</option>\n' +
        '        <option value="6" '+tp6+'>常温蛋糕</option>\n' +
        '    </select>\n' +
        '    <br>\n' +
        '    <div class="textArea clearfix">\n' +
        '        <label for="">商品描述:</label>\n' +
        '        <textarea name="" id="productDescription" cols="30" rows="10" placeholder="输入商品描述" >' + des + '</textarea>\n' +
        '    </div>\n' +
        '    <span class="promptText"></span>\n' +
        '</form>', '编辑商品', {
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        showConfirmButton: true,
        customClass: 'addProductModel'
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
          this.$axios.post("/api/changeGoodsNews.do", {
            val0: id, val1: thisProductTextVal,
            val2: thisProductPriceVal, val3: thisProductTpVal, val4: thisProductDesVal
          }).then((res) => {
            // console.log(res.data)
            this.$message({
              type: 'info',
              message: '修改成功'
            });
            this.$axios.get("/api/loadGoods.do")
              .then((res) => {
                // console.log(res.data)
                var productData = res.data.map(function (item) {
                  return {
                    id: item.goods_id,
                    name: item.goods_name,
                    imgSrc1: item.goods_img,
                    price: "￥" + item.goods_price,
                    description: item.goods_description,
                    tp: item.tp_id
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
    productDelete(index, row) {
      var id = row.id;
      console.log(id)
      this.$alert('<div class="del clearfix">\n' +
        '        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAACyklEQVQ4EaWVS0wTYRDHf/3aAqU8VaBASQB5JI0xJIqJBiMHlKMGYzyoicaLXjyZePNgYkw8cPPg0ZNRD8aDB1+JL6JRkChGA0QwBKhAsTxCgS3tOtvSpl12UeJks+33zcx/5vvvzHwOXdcxiR5nbQltgVAvwTfMDRHXKG7Ed4CKNtxFuL0ol8lJlg4z1nKIX2/5cZfxJ2jzZgdnHr42Gs9Q1Y7Xj0NlGmRi6Ux/4Pttfj5iNQwb8k37uQup7iBwAf9hySa9nYE19pi+a4T60GNpte0fyaiokZYrNJ3FsQ6Xwpp6R88lZgXIPp2NwPlVtN2i9lhSkzjw4hhfupnttwJy4Cogp8REzTpsJEj/DWY+JQlRxKNMPGPyhfXRlJvARfZ3G3AWohP+yugDtEVRKuNjjdxHm7Ow/JettWXGn7IwLKkpZnqNZ0s0ZcXQmR9m6r2cTxF8jSYV8B8SXTSKKaapRBFs5dtZBp0flN5QibK01Cc3ddYiRJeQxtpEpOH0eFYTWBgLj6shloPoUQtt9pYLlZu9Y1rFWQnjniW+aTOoHGkmaYV6k7d5KTMjKkfYFMtbJZNDUbYXA9VGhKapHmNsSEnbicNFaQDlVviPUFhrZ2YkXtzE9hac9lR4Kqhsx5mnKKjB32mbmqTccIrdl8kptY7ncFLeyrZdEtUleNSfIPiS3wMW1jJRR+7hLrBtMo+PuuN4q8VXGaco30fzeXKtIgtf4W9MfyS2YhFJsq7rovaokJXAkpdw0XyOhtO48i0cjC2rxpAz+TvYcxUZswlJzUJZyMD4fJOhO0Qm/9bqDjxlxghsvU7ejiSQvDOwZCVFNPrQeCaeszJjnY7cQ76D1Hex8yQubxpoA5ah0YlMEx5g8pUxI+cGia0azSg8FNVReYiaTkoCeGtQzkwgS6yUgZAdjaBrCa5044KQmhRCnZ70ZZEyXf/9AwLpAEG3+zEQAAAAAElFTkSuQmCC">\n' +
        '        <p>确认删除?</p>\n' +
        '    </div>', '提示', {
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        customClass: 'deleteProduct'
      }).then(() => {
        this.$axios.get("/api/deleteProduct.do", {params: {id: id}})
          .then((res) => {
            this.$message({
              type: 'info',
              message: '成功删除'
            });
            this.$axios.get("/api/loadGoods.do")
              .then((res) => {
                var productData = res.data.map(function (item) {
                  return {
                    id: item.goods_id,
                    name: item.goods_name,
                    imgSrc1: item.goods_img,
                    price: "￥" + item.goods_price,
                    description: item.goods_description,
                    tp: item.tp_id
                  }
                });
                this.tableData = productData;
                this.total = this.tableData.length;
              });
          })
      }).catch(() => {
      });
    },

    /*将选中的加data中的入数组*/
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    /*批量删除*/
    productsDelete() {
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
        var selectArr = this.multipleSelection;
        this.$axios.post("/api/deleteProducts.do", {selectArr: selectArr})
          .then((res) => {
            this.$message({
              type: 'info',
              message: '成功删除'
            });
            this.$axios.get("/api/loadGoods.do")
              .then((res) => {
                var productData = res.data.map(function (item) {
                  return {
                    id: item.goods_id,
                    name: item.goods_name,
                    imgSrc1: item.goods_img,
                    price: "￥" + item.goods_price,
                    description: item.goods_description,
                    tp: item.tp_id
                  }
                });
                this.tableData = productData;
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

    /*下拉菜单筛选*/
    onSearch(val) {
      console.log(val);
      /*下拉菜单筛选连接数据*/
      this.$axios.get("/api/goodsChange.do", {params: {val: val}})
        .then((res) => {
          console.log(res.data);
          var productData = res.data.map(function (item) {
            return {
              id: item.goods_id,
              name: item.goods_name,
              imgSrc1: item.goods_img,
              price: "￥" + item.goods_price,
              description: item.goods_description,
              tp: item.tp_id
            }
          });
          this.tableData = productData;
          this.total = this.tableData.length;
        })
    },

    /*===模糊查询--过滤数据===*/
    filterSearchText(val) {
      var searchVal = val;
      // console.log(searchVal);
      var result = this.tableData.filter((value) => {
        var str = value.name + value.id;
        var searchValue = str.indexOf(searchVal);
        return searchValue != -1;
        /*不符合返回-1，符合返回搜索的*/
      });
      if (val != "") {
        return this.tableData = result;
      } else if (val == "") {
        this.$axios.get("/api/loadGoods.do")
          .then((res) => {
            // console.log(res.data)
            var productData = res.data.map(function (item) {
              return {
                id: item.goods_id,
                name: item.goods_name,
                imgSrc1: item.goods_img,
                price: "￥" + item.goods_price,
                description: item.goods_description,
                tp: item.tp_id
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
        optionsList: [],
        isShow: "",
        multipleSelection: []
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
              price: "￥" + item.goods_price,
              description: item.goods_description,
              tp: item.tp_id
            }
          });
          this.tableData = productData;
          this.total = this.tableData.length;
        });

      /*加载数据库的标签*/
      this.$axios.get("/api/loadTag.do")
        .then((res) => {
          // console.log(res.data);
          var TagData = res.data.map(function (item1) {
            return {
              value: item1.tp_id,
              label: item1.tp_name,
            }
          });
          // console.log(TagData);
          this.optionsList = TagData;
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
    transform: translate(-75%, -50%);
    opacity: 0;
  }


</style>
