<template>
  <div class="history">
    <!-- 第一层 -->
    <div class="screening">
      <ul>
        <li class="from fl" @click="selectFrom()" ref="fromNode">
          <span class="fromAddress">出发地</span>
          <span class="pullup"></span>
        </li>
        <div class="select-from" v-show="bool">
          hahahahahahhahah 
        </div>
        <li class="to fl" @click="selectTo()" ref="toNode">
          <span class="toAddress">目的地</span>
          <span class="pullup"></span>
        </li>
        <div class="select-to" v-show="show">
          hahahahahahhahah 
        </div>
        <li class="all fl" @click="selectAll()" ref="allNode">
          <span class="allAddress">全部</span>
          <span class="pullup"></span>
        </li>
        <div class="select-all" v-show="hide">
          hahahahahahhahah 
        </div>
      </ul>
    </div>

    <!-- 第二层 -->
    <div class="deliveryHistory">
      <ul>
        <li v-for="(item,index) in testDeliveryHistoryList" :key="index" class="waybill">
          <!-- 第一层 -->
          <div class="floor-n1">
            <span class="idName">运单号：</span><span class="id">{{item.id}}</span>
          </div>
          <!-- 第二层 -->
          <div class="floor-n2 clearfix">
            <div class="fromCity fl">
              <div class="fromBigCity">{{item.fromBigArea}}</div>
              <div class="fromSmallCity">{{item.fromSmallArea}}</div>
            </div>
            <div class="center fl">
              <span class="direct"></span>
              <span class="state">{{item.state}}</span>
            </div>
            <div class="toCity fl">
              <div class="toBigCity">{{item.toBigArea}}</div>
              <div class="toSmallCity">{{item.toSmallArea}}</div>
            </div>
          </div>
          <!-- 第三层 -->
          <div class="floor-n3">
            <span class="receiveTime">签收时间：</span><span class="time">{{item.receiveTime}}</span>
          </div>
          <!-- 第四层 -->
          <div class="floor-n4">
            <button class="evaluation">评价</button>
            <button class="delete">删除</button>
          </div>
        </li>
      </ul>
    </div>
    <!-- more -->
      <div class="more"></div>
  </div>
</template>

<script>
  export default {
  data () {
    return {
      bool:false,
      show:false,
      hide:false,
      testDeliveryHistoryList:[
        {id:'AA123456789',fromBigArea:'江苏省',fromSmallArea:'苏州市',toBigArea:'北京市',toSmallArea:'昌平',state:'已签收',receiveTime:'2020-1-1 12:00'},
        {id:'AA123456789',fromBigArea:'江苏省',fromSmallArea:'苏州市',toBigArea:'北京市',toSmallArea:'昌平',state:'已签收',receiveTime:'2020-1-1 12:00'},
        {id:'AA123456789',fromBigArea:'江苏省',fromSmallArea:'苏州市',toBigArea:'北京市',toSmallArea:'昌平',state:'已签收',receiveTime:'2020-1-1 12:00'},
        {id:'AA123456789',fromBigArea:'江苏省',fromSmallArea:'苏州市',toBigArea:'北京市',toSmallArea:'昌平',state:'已签收',receiveTime:'2020-1-1 12:00'},
        {id:'AA123456789',fromBigArea:'江苏省',fromSmallArea:'苏州市',toBigArea:'北京市',toSmallArea:'昌平',state:'已签收',receiveTime:'2020-1-1 12:00'},
        {id:'AA123456789',fromBigArea:'江苏省',fromSmallArea:'苏州市',toBigArea:'北京市',toSmallArea:'昌平',state:'已签收',receiveTime:'2020-1-1 12:00'},
      ],

    }
  },
  methods: {
    selectFrom(){
      this.bool = !this.bool;
      // if(!this.bool){
      //   this.$refs.fromNode.children[1].style.background = "red";
      // }else{
      //   this.$refs.fromNode.children[1].style.background = "black";
      // }
    },
    selectTo(){
      this.show = !this.show;
    },
    selectAll(){
      this.hide = !this.hide;
    }
  }
};
</script>

<style lang="scss" scoped>
  .history{
    width:r(750);
    margin:r(30) 0 0 r(-105);
    // 第一层
    .screening{
      width:100%;
      height:r(75);
      background: #fff;
      ul{
        width:100%;
        height:r(75);
        // 出发地
        .from{
          width:33.3333%;
          height:r(75);
          text-align: center;
          .fromAddress{
            font-size: r(30);
            font-family: PingFang SC;
            line-height: r(75);
            color:#333;
            margin-right:r(21);
          }
          .pullup{
            display: inline-block;
            width:r(23);
            height:r(14);
            background: url('../../assets/pullup.png') no-repeat;
            background-size: r(23) r(14);
          }
        }
        // 出发地弹出框
        .select-from{
          width:r(750);
          height:r(3000);
          background:#fff;
          position:absolute;
          top:r(166);
          z-index: 100000;
        }
        .to{
          width:33.3333%;
          height:r(75);
          text-align: center;
          .toAddress{
            font-size: r(30);
            font-family: PingFang SC;
            line-height: r(75);
            color:#333;
            margin-right:r(21);
          }
          .pullup{
            display: inline-block;
            width:r(23);
            height:r(14);
            background: url('../../assets/pullup.png') no-repeat;
            background-size: r(23) r(14);
          }
        }
        .select-to{
          width:r(750);
          height:r(3000);
          background:#fff;
          position:absolute;
          top:r(166);
          z-index: 100000;
        }
        .all{
          width:33.3333%;
          height:r(75);
          text-align: center;
          .allAddress{
            font-size: r(30);
            font-family: PingFang SC;
            line-height: r(75);
            color:#333;
            margin-right:r(21);
          }
          .pullup{
            display: inline-block;
            width:r(23);
            height:r(14);
            background: url('../../assets/pullup.png') no-repeat;
            background-size: r(23) r(14);
          }
        }
        .select-all{
          width:r(750);
          height:r(3000);
          background:#fff;
          position:absolute;
          top:r(166);
          z-index: 100000;
        }
      }
    }
    // 第二层
    .deliveryHistory{
      width:100%;
      overflow: hidden;
      ul{
        width:100%;
        .waybill{
          width:r(690);
          height: r(355);
          margin:r(20) auto 0;
          background: #fff;
          border-radius: r(30);
          overflow: hidden;
          // 第一层
          .floor-n1{
            width:100%;
            height:r(37);
            margin-top:r(30);
            .idName{
              margin-left:r(20);
              font-size: r(26);
              font-family: PingFangSC-Regular;
              color:#999;
            }
            .id{
              font-size: r(26);
              font-family: PingFangSC-Regular;
              color:#333;
            }
          }
          // 第二层
          .floor-n2{
            width:100%;
            height:r(121);
            .fromCity{
              width:r(96);
              height:r(121);
              text-align: center;
              margin-left:r(148);
              .fromBigCity{
                font-size: r(32);
                font-family: PingFang SC;
                color:#333;
                font-weight: 900;
                margin-top:r(20);
                line-height: r(45);
              }
              .fromSmallCity{
                font-size: r(22);
                font-family: PingFang SC;
                color:#333;
                line-height: r(30);
                margin-top:r(15);
              }
            }
            .center{
              width:r(84);
              height:r(121);
              text-align: center;
              margin-left:r(60);
              .direct{
                display: block;
                width:r(84);
                height:r(26);
                background: url('../../assets/direct.png') no-repeat;
                background-size: r(84) r(26);
                margin-top:r(30);
              }
              .state{
                display: block;
                font-size: r(22);
                font-family: PingFang SC;
                color:#333;
                margin-top:r(22);
              }
            }
            .toCity{
              width:r(96);
              height:r(121);
              text-align: center;
              margin-left:r(60);
              .toBigCity{
                font-size: r(32);
                font-family: PingFang SC;
                color:#333;
                font-weight: 900;
                margin-top:r(20);
                line-height: r(45);
              }
              .toSmallCity{
                font-size: r(22);
                font-family: PingFang SC;
                color:#333;
                line-height: r(30);
                margin-top:r(15);
              }
            }
          }
          // 第三层
          .floor-n3{
            width:100%;
            height:r(37);
            margin-top:r(30);
            .receiveTime{
              margin-left:r(20);
              font-size: r(26);
              font-family: PingFangSC-Regular;
              color:#999;
            }
            .time{
              font-size: r(26);
              font-family: PingFangSC-Regular;
              color:#333;
            }
          }
          // 第四层
          .floor-n4{
            width:r(650);
            height:r(99);
            margin:0 auto;
            border-top:1px solid rgba(198,198,198,0.3);
            display: flex;
            justify-content: center;
            .evaluation{
              width:r(126);
              height:r(50);
              background: #fff;
              border:none;
              border:1px solid #ccc;
              border-radius: r(50);
              font-size: r(26);
              font-family: PingFang SC;
              color:#666;
              margin-top:r(24);
            }
            .delete{
              width:r(126);
              height:r(50);
              margin-left:r(30);
              background: #fff;
              border:none;
              border:1px solid #ccc;
              border-radius: r(50);
              font-size: r(26);
              font-family: PingFang SC;
              color:#666;
              margin-top:r(24);
            }
          }
        }
      }
    }
    .more{
      width:100%;
      height:r(20);
      margin-bottom:r(98);
    }
  }
</style>