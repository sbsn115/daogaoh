<template>
  <div id="app">
    <div class="loginBox" ref="myBox">
      <ul style="padding:0">
        <li>
          <img src="../../assets/images/logo.png" alt="">
        </li>
        <li>
          <i class="iconfont">&#xe6f2;</i>
          <input type="text" placeholder="请输入账户" id="text">
        </li>
        <li>
          <i class="iconfont">&#xe63e;</i>
          <input type="password" placeholder="请输入密码" id="pwd">
        </li>
        <li class="clearfix">
          <div class="prompt">
            <i>!</i>
            <span>你输入的账户或密码错误</span>
          </div>
          <span class="forgetPsw">忘记密码?</span>
        </li>
        <li>
          <button type="button" @click="loginBtn($event)">登录</button>
        </li>
      </ul>

    </div>
  </div>
</template>
<script>
  import '../../assets/lib/jquery-1.12.4'

  var loginMethods = {
    loginBtn(e) {
      const thisBtn = event.target;
      var textInput = $(thisBtn).parent().prev().prev().prev().find("#text");
      var pwdInput = $(thisBtn).parent().prev().prev().find("#pwd");

      var inputText = $(thisBtn).parent().prev().prev().prev().find("#text").val();
      var inputPwd = $(thisBtn).parent().prev().prev().find("#pwd").val();

      textInput.focus(function () {
        $(thisBtn).parent().prev().find(".prompt").hide();
      });
      pwdInput.focus(function () {
        $(thisBtn).parent().prev().find(".prompt").hide();
      });

      if (inputText == "") {
        $(thisBtn).parent().prev().find(".prompt").show();
        $(thisBtn).parent().prev().find(".prompt").find("span").text("请输入账号");
      } else if (inputText != "" && inputPwd == "") {
        $(thisBtn).parent().prev().find(".prompt").show();
        $(thisBtn).parent().prev().find(".prompt").find("span").text("请输入密码");
      } else if (inputText != "" && inputPwd != "") {
        var inputTextRule = /^[0-9]{11}/;
        var inputPwdRule = /^\S{6}$/;
        if (inputTextRule.test(inputText) == false) {
          $(thisBtn).parent().prev().find(".prompt").show();
          $(thisBtn).parent().prev().find(".prompt").find("span").text("请输入正确账户");
        } else if (inputPwdRule.test(inputPwd) == false) {
          $(thisBtn).parent().prev().find(".prompt").show();
          $(thisBtn).parent().prev().find(".prompt").find("span").text("请输入6位密码");
        } else {
          this.$axios.post('/api/login2.do', {user: inputText, pwd: inputPwd})
            .then((res) => {
              console.log("请求成功后的回调函数执行1");
              if (res.data.length == 0) {
                $(thisBtn).parent().prev().find(".prompt").show();
                $(thisBtn).parent().prev().find(".prompt").find("span").text("您输入的账户或密码不正确");
              } else if (res.data.length != 0) {
                let u_id = res.data[0].a_id;
                sessionStorage.setItem('id', u_id);
                this.$router.push({path: '/index'});
                this.$router.go(0);
              }
            })
        }
      }
    }
  };
  export default {
    name: 'loginBox',
    data() {
      return {}
    },
    methods: loginMethods,

  }

</script>

<style scoped>
  /*清除浮动*/
  .clearfix:after {
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  @font-face {
    font-family: "iconfont";
    src: url('../../assets/fonts/iconfont.eot'); /* IE9*/
    src: url('../../assets/fonts/iconfont.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('../../assets/fonts/iconfont.woff') format('woff'), /* chrome, firefox */ url('../../assets/fonts/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/ url('../../assets/fonts/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  .loginBox {
    width: 330px;
    height: 370px;
    background-color: #fff;
    padding: 45px 40px 60px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    right: 95px;
    top: 50%;
    transform: translateY(-50%);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.11);
    -moz-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.11);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.11);
  }

  .loginBox ul li {
    position: relative;
    list-style: none;
    margin-bottom: 18px;
  }

  .loginBox ul li:nth-child(3) {
    margin-bottom: 12px;
  }

  .loginBox ul li:nth-child(4) {
    margin-bottom: 12px;
  }

  .loginBox ul li:nth-child(1) img {
    width: 130px;
    height: 50px;
  }

  .loginBox ul li:nth-child(2) input,
  .loginBox ul li:nth-child(3) input {
    width: 250px;
    height: 40px;
    border: 1px solid rgba(104, 64, 41, 0.40);
    outline: 0;
    padding-left: 40px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .loginBox ul li:nth-child(2) i,
  .loginBox ul li:nth-child(3) i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #442818;
    font-size: 20px;
    margin-left: 12px;
  }

  .loginBox ul li:nth-child(4) .forgetPsw,
  .loginBox ul li:nth-child(4) .prompt {
    color: #FF0000;
    font-size: 12px;
    float: right;
    margin-right: 10px;
  }

  .loginBox ul li:nth-child(4) .prompt {
    float: left;
    margin-left: 10px;
    display: none;
  }

  .loginBox ul li:nth-child(4) .prompt i {
    width: 12px;
    height: 12px;
    background-color: #FF0000;
    color: #fff;
    line-height: 12px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    font-style: normal;
    text-align: center;
    display: inline-block;
  }

  .loginBox ul li:nth-child(5) button {
    width: 250px;
    height: 40px;
    background-color: rgba(68, 40, 24, 0.8);
    outline: none;
    border: 0;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    transition: all .3s;
  }

  .loginBox ul li:nth-child(5) button:hover {
    background-color: rgba(68, 40, 24, 0.9);
  }

</style>
