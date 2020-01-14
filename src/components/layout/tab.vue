<template>
  <div class="tab">
    <div class="nav">
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'">发布货源</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">发货历史</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'">常发货源</mt-button>
    </div>
    
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
        	<!-- cell组件 -->
          <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
        	<!-- cell组件 -->
          <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
        	<!-- cell组件 -->
          <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'page-tab-container',
  data() {
    return {
      active: 'tab-container1'
    };
  }
};
</script>
 
<style lang="scss" scoped>
  .item {
    display: inline-block;
  }
 
  .nav {
    padding: 10px;
  }
 
  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }
  .tab{
    width:100%;
    height:r(90);
    background: #fff;
    // padding-left:15%;
    .nav{
      margin:0 auto;
      display: flex;
      justify-content: center;
    }
  }
</style>