<template>
  <div id="app">
    <nav id="topNav" class="clearfix">
      <ul class="clearfix" style="margin: 0;padding: 0;">
        <li>
          <img src="../../assets/images/logo.png" alt="">
        </li>
        <li>
          <span ref="timeBox"></span>
        </li>
        <li>
          <div class="personImg"></div>
          <div class="dropdownMenu" @mouseenter="showAndHide($event)" @mouseleave="hideAndShow($event)">
            <span class="el-dropdown-link" v-for="item in dataArr">
              <span class="p_name">{{item.name}}</span>
              <span class="p_tp">{{item.type}}</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <dl class="sonMenu">
              <span></span>
              <dd>
                <router-link to="/grzx" style="text-decoration: none;color: #684029;display: block">个人中心</router-link>
              </dd>
              <dd @click="delLogin">切换用户</dd>
              <dd @click="delLogin">退出登录</dd>
            </dl>
          </div>
        </li>
        <li>

        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import '../../assets/lib/jquery-1.12.4'
  /*获取存在本地的用户id*/
  var u_id = sessionStorage.getItem('id');
  export default {
    name: "topnav",
    mounted() {
      this.init();
    },
    methods: {
      showAndHide(event) {
        var el_dropDown_link = event.target;

        $(el_dropDown_link).find('.sonMenu').stop().slideDown(300);
      },
      hideAndShow(event) {
        var el_dropDown_link = event.target;
        $(el_dropDown_link).find('.sonMenu').stop().slideUp(300);
      },
      delLogin() {
        this.$router.push('/');
        sessionStorage.removeItem('id');
      },

      init() {
        var myTime;

        function nowDate() {
          var now = new Date;
          var myYear = now.getFullYear();
          var myMonth = now.getMonth() + 1;
          var myDate = now.getDate();
          var myHours = now.getHours();
          var myMinutes = now.getMinutes();
          var mySeconds = now.getSeconds();
          myMonth = myMonth >= 10 ? myMonth : "0" + myMonth;
          myDate = myDate >= 10 ? myDate : "0" + myDate;
          myHours = myHours >= 10 ? myHours : "0" + myHours;
          myMinutes = myMinutes >= 10 ? myMinutes : "0" + myMinutes;
          mySeconds = mySeconds >= 10 ? mySeconds : "0" + mySeconds;
          myTime = myYear + "/" + myMonth + "/" + myDate + " " + myHours + ":" + myMinutes + ":" + mySeconds;
        }

        const timeBox = this.$refs.timeBox;
        setInterval(function () {
          nowDate();
          $(timeBox).text(myTime)
        }, 1000);
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
          // console.log(res.data)
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

<style scoped>
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

  #topNav img {
    vertical-align: middle;
  }

  #topNav ul li {
    float: left;
    list-style: none;
    /*outline: 1px solid red;*/
    width: 200px;
    height: 70px;
    line-height: 70px;
    margin-left: 20px;
    text-align: center;
  }

  #topNav ul li:nth-child(1) img {
    width: 130px;
    height: 50px;
  }

  #topNav ul li:nth-child(2) {
    margin-left: 70px;
  }

  #topNav ul li:nth-child(2) span {
    color: #684029;
    font-size: 18px;
  }

  #topNav ul li:nth-child(3),
  #topNav ul li:nth-child(4) {
    float: right;
    margin-right: 50px;
  }

  #topNav ul li:nth-child(3) .personImg {
    position: absolute;
    margin-right: 20px;
    z-index: 99;
    width: 40px;
    height: 40px;
    margin-top: 16px;
    border-radius: 50%;
    background: url("../../assets/user.png");
    background-size: 100%;
  }

  #topNav ul li:nth-child(3) .dropdownMenu {
    height: 70px;
    position: relative;
    width: 150px;
    z-index: 999;
    padding: 0 10px
  }

  #topNav ul li:nth-child(3) .dropdownMenu .el-dropdown {
    height: 70px;
    width: 100%;
  }

  #topNav .p_name, #topNav .p_tp, #topNav .el-icon-arrow-down {
    position: absolute;
    color: #2c3e50;
    left: 55px;
    top: 50%;
    transform: translateY(-80%);
  }

  #topNav .p_tp {
    transform: translateY(5px);
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    color: grey;
    left: 56px;
  }

  #topNav .p_name {
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    font-weight: 700;
  }

  #topNav .el-icon-arrow-down {
    left: 130px;
    font-size: 14px;
    top: 40px;
  }

  #topNav .el-dropdown-link {
    height: 70px;
    display: inline-block;
    cursor: pointer;
    width: 100%;
  }

  #topNav dl.sonMenu {
    width: 170px;
    background-color: #fff;
    position: absolute;
    top: 75px;
    left: 0;
    border-radius: 4px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.11);
    padding: 10px 0;
    display: none;
  }

  #topNav dl.sonMenu dd {
    height: 40px;
    cursor: pointer;
    line-height: 40px;
    font-size: 14px;
    color: #684029;
    transition: all .3s;
  }

  #topNav dl.sonMenu dd:hover {
    background-color: #f5f7fa;
  }

  #topNav dl.sonMenu span {
    height: 10px;
    width: 10px;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 50%;
    transform: rotate(45deg) translateX(-50%);
  }

  #topNav dl.sonMenu span:hover {
    background-color: #fff;
  }

  #topNav ul li:nth-child(4) {
    width: 50px;
    margin-right: 20px;
  }

</style>
