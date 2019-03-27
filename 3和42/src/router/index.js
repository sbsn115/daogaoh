import Vue from 'vue'
import Router from 'vue-router'
import login_router from "./login_router";
import router from "./router";

Vue.use(Router);

/*==========>跳转步骤3<==========index.js中操作跳转，上需要引入*/
const vueRouter = new Router({
  routes: [
    /*总合tab子路由*/
    ...login_router,
    ...router,
  ]
});

/*导航守卫，在登录时或直接输入地址时判断是否为登录状态(即id有没有存在本地服务器上)*/
// const whiteList = ['/'];
// vueRouter.beforeEach(function (to, from, next) {
//   // console.log(sessionStorage.getItem('id'));
//   // console.log("进入守卫");
//   if (whiteList.indexOf(to.path) !== -1) {
//     next();
//   }
//   if (sessionStorage.getItem('id')!=null) {
//     next();
//   }else if (sessionStorage.getItem('id')==null){
//     next({path:'/'});
//   }
// });

export default vueRouter;
