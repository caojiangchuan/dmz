<template>
  <div>
    <p>{{a1}}</p>
    <div class="pd10"><router-link to="/about">关于我们</router-link></div>
    <div class="pd10"><router-link to="/status666">Status666</router-link></div>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'home',
  metaInfo: {
    title: '菜单导航'
  },
  data () {
    return {
      a1: process.env.VUE_APP_API_URL
    }
  },
  mounted () {
    Toast('我是提示文案，建议不超过十五字~')
  },
  destroyed () {
    Toast.clear()
  }
}
</script>

<style scoped>
  .pd10{
    padding: 10px;
  }
</style>
