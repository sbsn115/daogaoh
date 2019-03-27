<template>
  <el-row class="tac" style="overflow-x: hidden">
    <div style="width: 259px;border-right: solid 1px #e6e6e6;">
      <div class="img" v-for="item in dataArr">
        <div class="img-1">
        </div>
        <p class="p1">{{item.name}}</p>
        <p class="p2">{{item.type}}</p>
        <img src="../../assets/lo.png" alt="" class="myImg">
      </div>
    </div>
    <el-col :span="5">
      <el-menu default-active="0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
               background-color="white"
               unique-opened
               text-color="grey" active-text-color="grey" router>
        <!--数据统计-->
        <el-menu-item index="/dataMange" class="cedao liHover">
          <i class="el-icon-menu"></i>
          <span slot="title" class="tg">数据统计</span>
        </el-menu-item>
        <!--商品管理-->
        <el-submenu index="2" class="cedao">
          <template slot="title" class="liHover">
            <i class="el-icon-goods"></i>
            <span class="tg">商品管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/product" class="liHover"><i class="el-icon-arrow-right r1"></i><span
              class="s1">商品信息管理</span></el-menu-item>
            <el-menu-item index="/shopCar" class="liHover"><i class="el-icon-arrow-right r2"></i><span
              class="s1">购物车管理</span></el-menu-item>
            <el-menu-item index="/order" class="liHover"><i class="el-icon-arrow-right r3"></i><span
              class="s1">订单管理</span></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!--客户管理-->
        <el-submenu index="3" class="cedao">
          <template slot="title" class="liHover">
            <i class="el-icon-view"></i>
            <span class="tg">客户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/client" class="liHover"><i class="el-icon-arrow-right r1"></i><span
              class="s1">客户信息管理</span></el-menu-item>
            <el-menu-item index="/discount" class="liHover"><i class="el-icon-arrow-right r2"></i><span
              class="s1">优惠券管理</span></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!--员工管理-->
        <el-menu-item index="/staff" class="cedao liHover">
          <i class="el-icon-service"></i>
          <span slot="title" class="tg">员工管理</span>
        </el-menu-item>
        <!--公告管理-->
        <el-submenu index="5" class="cedao">
          <template slot="title" class="liHover">
            <i class="el-icon-news"></i>
            <span class="tg">公告管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/release" class="liHover"><i class="el-icon-arrow-right r4"></i><span
              class="s1">发布公告</span></el-menu-item>
            <el-menu-item index="/see" class="liHover"><i class="el-icon-arrow-right r4"></i><span
              class="s1">查看公告</span></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!--企业联系-->
        <el-menu-item index="/contact" class="cedao liHover">
          <i class="el-icon-document"></i>
          <span slot="title" class="tg">企业联系</span>
        </el-menu-item>
        <!--权限管理-->
        <el-menu-item index="/qxgl" class="cedao liHover">
          <i class="el-icon-setting"></i>
          <span slot="title" class="tg">权限管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
  var u_id = sessionStorage.getItem('id');
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    data() {
      return {
        dataArr: []
      }
    },
    created() {
      /*加载数据库的商品*/
      this.$axios.get("/api/loadAdmin.do", {params: {u_id: u_id}})
        .then((res) => {
          console.log(res.data)
          var dataArr = res.data.map(function (item) {
            return {
              name: item.a_name,
              type: item.a_levels
            }
          });
          this.dataArr = dataArr;
        });
    }
  }
</script>
<style>
  .myImg {
    position: absolute;
    top: 40px;
    left: 200px;
  }

  .img {
    width: 260px;
    height: 90px;
    position: relative;
  }

  .img-1 {
    width: 40px;
    height: 40px;
    background-image: url("../../assets/user.png");
    background-size: 100%;
    position: absolute;
    top: 28px;
    left: 36px;
    border-radius: 50%;
  }

  .p1 {
    position: absolute;
    margin-top: 30px;
    margin-left: 100px;
    font-weight: bold;
    font-size: 14px;
  }

  .p2 {
    position: absolute;
    margin-top: 50px;
    margin-left: 100px;
    font-size: 12px;
    color: grey;
  }

  .el-submenu__icon-arrow {
    right: 15px;
    font-size: 16px;
  }

  .el-icon-arrow-right {
    margin-left: 10px;
  }

  .s1 {
    display: inline-block;
    margin-left: 7px;
  }

  span {
    font-size: 14px;
  }

  .el-col {
    width: 260px;
  }

  .cedao {
    margin-left: -70px;
  }

  .liHover:hover,
  .el-submenu__title:hover {
    background-color: #f5f7fa !important;
  }

  .tg {
    margin-left: 25px;
  }

  .cedao:hover .tg {
    color: #bb9772;
  }

  .el-icon-arrow-down {
    margin-right: 30px;
  }

  .el-submenu .el-menu-item {
    padding: 0 0;
  }

  /*.r1{*/
  /*margin-right: 10px;*/
  /*}*/
  .r2 {
    margin-left: -5px;
  }

  .r3 {
    margin-left: -20px;
  }

  .r4 {
    margin-left: -13px;
  }

  .el-menu-item-group:first-child {
    margin-top: -10px;
  }

  .el-menu-item.is-active {
    background-color: #f5f7fa !important;
  }

</style>
