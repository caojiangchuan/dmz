<template>
  <div class="fySuc">
      <div class="fy_suc van-hairline--top">
        <img  src="../assets/img/suc.png" class="fy_suc_img" v-if="imgUrl"/>
        <img  src="../assets/img/error.png" class="fy_suc_img" v-else />
        <p v-if="imgUrl">充值成功</p>
        <p v-else>充值失败</p>
      </div>
      <div class="fy_funds clearfix ">
            <p class="p1">充值金额（元）</p>
            <p class="p2">{{AMT}}</p>
      </div>
      <div class="fy_chujie" @click="chujie">申请出借</div>
      <div class="fy_gopay" @click="toPay">继续充值</div>

  </div>
</template>

<script>
import { goRecharge,goChujie } from '../utils/native.js'
import {  Toast } from 'vant'
export default {
  name: 'fuyouSuccess',
  metaInfo: {
    title: '充值详情'
  },
  data () {
    return {
      AMT:0,
      imgUrl:''
    }
  },
  components: {
//    [Cell.name]: Cell,
//    [CellGroup.name]: CellGroup
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      if(this.$route.query.AMT) this.AMT=this.formatNum((this.$route.query.AMT/100).toFixed(2))
      let code=this.$route.query.RESPONSECODE;
      if(code=='0000'){
          this.imgUrl=true
      }else{
        this.imgUrl=false
      }
    },
    toAgreement (url) {
      if (url) {
        window.location.href = url
      } else {
        Toast('资源暂时没有获取到，请稍后再试')
      }
    },
    chujie(){
      goChujie();
    },
    toPay (){
      goRecharge();
    },
    formatNum(str){
      var newStr = "";
      var count = 0;

      if(str.indexOf(".")==-1){
        for(var i=str.length-1;i>=0;i--){
          if(count % 3 == 0 && count != 0){
            newStr = str.charAt(i) + "," + newStr;
          }else{
            newStr = str.charAt(i) + newStr;
          }
          count++;
        }
        str = newStr + ".00"; //自动补小数点后两位
        return str
      }
      else
      {
        for(var i = str.indexOf(".")-1;i>=0;i--){
          if(count % 3 == 0 && count != 0){
            newStr = str.charAt(i) + "," + newStr;
          }else{
            newStr = str.charAt(i) + newStr; //逐个字符相接起来
          }
          count++;
        }
        str = newStr + (str + "00").substr((str + "00").indexOf("."),3);
        return str
      }
    }

  }
}


</script>

<style>
  .fySuc{ background: #f5f5f5; position: absolute; width: 100%; height: 100%;}
  .clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
  .fy_suc{ width: 100%; height: 212px; text-align: center; line-height: 121px; border-bottom:2px solid rgba(238,238,238,1); background: #fff; }
  .fy_suc_img{ width: 51px;}
  .fy_chujie{ width: 280px; height: 45px; line-height: 45px; color: #fff; font-size: 15px; background:rgba(149,120,86,1); border-radius:5px; text-align: center; margin: 108px auto 0 auto;}
  .fy_gopay{ width: 280px; height: 45px; line-height: 45px; color: #666; font-size: 15px; background:#fff; border:1px solid rgba(212,212,212,1); border-radius:5px; text-align: center; margin: 21px auto;}
</style>
<style lang="less">
.fy_suc{
  p{ position: absolute; top: 80px; width: 100%; text-align: center;}
}
.fy_funds{
  padding:20px 14px;border-bottom:1px solid rgba(238,238,238,1); background: #fff;
  .p1{ float: left; font-size: 14px; color: #333; }
  .p2{ float: right; font-size: 15px; color: #373737; }
}
</style>
