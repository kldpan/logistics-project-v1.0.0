<template>
  <div class="tabbar">
    <!-- 底部导航 -->
    <!-- <div @click="toPath('/index')">
        <img src="@/assets/goods-2.png"><br>
        <span>发货</span>
    </div>
    <div @click="toPath('/order')">
        <img src="@/assets/order-1.png"><br>
        <span>订单</span>
    </div>
    <div @click="toPath('/mine')">
        <img src="@/assets/mine-1.png"><br>
        <span>我的</span>
    </div> -->

    <div v-for="(item,index) in pathList" :key="index">
        
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      pathList: [
        { pathname: "index", path: "/index", icon:"@/assets/goods-1.png", selectIcon: "@/assets/goods-2.png", spanName: "发货"},
        { pathname: "order", path: "/order", icon:"@/assets/order-1.png", selectIcon: "@/assets/order-2.png", spanName: "订单"},
        { pathname: "mine", path: "/mine", icon:"@/assets/mine-1.png", selectIcon: "@/assets/mine-2.png", spanName: "我的"},
      ],
      selected:'',
      num:0
    };
  },
  methods: {
    selectIcon(index){
        // 当点击该图标时，将num换为该图标的下标值，节点处的图标链接改为图标下标处时2.png,不是该下标值时，改为1.png
        this.num = index;
        // 并在点击时跳转到各自的页面
        this.$router.push(this.pathList[index].path);
    }
  },



    data() {
        return {
            pathList: [
                {pathname: "index", path: "/index", imgUrl: "goods-", name: "发货"},
                {pathname: "order", path: "/order", imgUrl:"order-", name: "订单"},
                {pathname: "mine", path: "/mine", imgUrl:"mine-", name: "我的"}
            ],
            num:0
        };
    },
    mounted() {
        // this.$eventBus.$on("testEvent", res => {
        //   console.log(res);
        // });
        // console.log(this.$route);
        this.$store.dispatch("getTestData");
    },
    computed: {
        testRoute() {
        return this.$route.meta;
        }
    },
    methods: {
        toPath(path) {
        this.$router.push(path);
        }
    }




};
</script>

<style lang="scss" scoped>
.tabbar{
    display: flex;
    // justify-content:space-between;
    width:100%;
    height:r(98);
    background-color:#fff;
    position:fixed;
    bottom:0;
    z-index: 10000;
    overflow: hidden;
    }
.tabbar>div{
    flex:1;
    display:flex;
    justify-content: center;
}
</style>