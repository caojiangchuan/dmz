<template>
    <div class="page">
      <div class="page-content" v-if="this.resultStatus === '1'">
        <div class="agreePage">
          <div class="list-block">
            <ul class="sign-wrapper">
              <li class="sign-icon">
                <img src="../../assets/img/sign-constract/sign_success_icon.png" alt="">
              </li>
              <li class="sign-info-tit">签署成功！</li>
              <li>您可正常购买大拇指产品</li>
              <li class="sign-btns">
                <span href="javascript:;" class="confirm-btn" @click="goDetails()">知道啦</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="page-content" v-if="this.resultStatus === '0'">
        <div class="agreePage">
          <div class="list-block">
            <ul class="sign-wrapper">
              <li class="sign-icon">
                <img src="../../assets/img/sign-constract/sign_failed_icon.png" alt="">
              </li>
              <li class="sign-info-tit">签署失败！</li>
              <li>为保障您正常购买大拇指产品，建议您重新签署</li>
              <li class="sign-btns">
                <span  class="confirm-btn" @click="goSign()">重新签署</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { closeWebView } from '../../utils/native'
export default{
  name: 'signUpSuccess',
  metaInfo: {
    title: '个人电子签章授权委托书'
  },
  data () {
    return {
      productId: this.$route.query.productId,
      cmNumber: this.$route.query.cmNumber,
      resultStatus: this.$route.query.resultCode,
      contractType: this.$route.query.contractType
    }
  },
  methods: {
    goDetails () {
      /* eslint-disable no-undef */
      closeWebView()
    },
    goSign () {
      closeWebView()
    }
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
  .page {
    border-top: 1px solid transparent;
    height: 100vh;
    background:rgba(245, 245, 245,1);
    margin-top: -1px;
    .page-content {
      margin-top: 10px;
      background: #fff;
      height: 322px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      .sign-icon {
        margin-bottom: 20px;
      }
      .sign-btns {
        width: 220px;
        height: 45px;
        line-height: 45px;
        color: #fff;
        font-size: 16px;
        background-color: #957856;
        border-radius: 8px;
        margin: 20px auto;
      }
      .sign-info-tit {
        margin-bottom: 15px;
      }
      img {
        width: 50px;
      }
    }
  }
</style>
