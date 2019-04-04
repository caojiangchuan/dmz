<template>
  <div>
    <van-cell-group v-show="arguementListData.length">
  <!-- <van-cell v-for= '(item, i) in arguementListData' :key="i" :title="'《' + item.fName + '》'" :is-link="item.fPath" @click="toAgreement(customerNo, lendNo, item.agreementType)" /> -->
  <van-cell v-for= '(item, i) in arguementListData' :key="i" :title="'《' + item.fName + '》'" is-link @click="toAgreement(item.fPath)" />
    </van-cell-group>
    <div v-show="!arguementListData.length">
        <p class="text-center">暂无协议</p>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Toast } from 'vant'
export default {
  name: 'agreementMenulist',
  metaInfo: {
    title: '相关协议'
  },
  data () {
    return {
      arguementListData: [],
      customerNo: '',
      lendNo: ''
    }
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.memberId = this.$route.query.memberId
      this.lendNo = this.$route.query.lendNo
      this.$store.dispatch('actionArguementList1001240450', {memberId: this.memberId, lendNo: this.lendNo}).then((res) => {
        this.arguementListData = res.msgEx.infos ? res.msgEx.infos : []
        // console.log(this.arguementListData)
      })
    },
    // toAgreement (customerNo, lendNo, agreementType) {
    //   this.$store.dispatch('actionAgreementDetails202006', {customerNo: this.customerNo, lendNo: this.lendNo, contractType: agreementType}).then((res) => {
    //     this.agreementData = res.msgEx.infos ? res.msgEx.infos : []
    //     if (this.agreementData.viewUrl) {
    //       window.location.href = this.agreementData.viewUrl
    //     } else {
    //       Toast('资源暂时没有获取到，请稍后再试')
    //     }
    //   })
    // }
    toAgreement (url) {
      if (url) {
        window.location.href = url
      } else {
        Toast('资源暂时没有获取到，请稍后再试')
      }
    }
  }
}
</script>

<style>
  .van-cell {
    border-bottom: 1px solid #ddd;
    padding: 12px 15px;
  }
</style>
