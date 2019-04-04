<template>
    <div>
        <p>{{message}}</p>
        <div><van-button type="default">默认按钮</van-button></div>
        <div><van-button type="primary">主要按钮</van-button></div>
        <div><van-button type="danger">危险按钮</van-button></div>

        <div>
            {{a}}
        </div>
        <div>
          <button @click="toast">toast</button>
        </div>
    </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'index',
  metaInfo: {
    title: '大拇指首页'
  },
  data () {
    return {
      message: '大拇指首页',
      a: ''
    }
  },
  watch: {
  },
  components: {
    [Button.name]: Button
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.$store
        .dispatch('actionBill103007', {
          memberId: '1001246300',
          queryDate: '201805'
        })
        .then(res => {
          console.log(JSON.stringify(res))
          // alert(res.data)
          this.a = res
        })
    },
    toast () {
    }
  }
}
</script>

<style scoped>
</style>
