import Vue from "vue";
import VueRouter from "vue-router";
import params from "@/core/api/params";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("@/components/index.vue"),
        meta: {
          title: "易物流-发布货源"
        }
      },
      {
        path: "order",
        name:"order",
        component: () => import("@/components/order.vue"),
        meta: {
          title: "易物流-我的订单",
        }
      },
      {
        path: "mine",
        name:"mine",
        component: () => import("@/components/mine.vue"),
        meta: {
          title: "易物流-个人中心",
        }
      },
    ],
    redirect: "/index"
  }
];
const router = new VueRouter({
  // mode:"history",
  routes
});
//全局的路由钩子函数
router.beforeEach((to, from, next) => {
  // console.log(params.userType)
  //from  从哪来
  //to    到哪去
  //next(); 是否到下一个路由
  // console.log(to.path);
  // if(to.path=="/"){
  //   next({path:"/index"})
  // }else{
  //   next();
  // }
  if (to.path == "/") {
    if (params.userType === "index") {
      next({
        path: "/index"
      });
    } else if (params.userType === "list") {
      next({
        path: "/list"
      });
    } else if (params.userType === "test") {
      next({
        path: "/test"
      });
    }else{
      next();
    }
  }else{
    next();
  } 
});

router.afterEach((to, from) => {
  // console.log("路由跳转完毕")
});

export default router;
