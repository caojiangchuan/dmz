<template>
    <div class="text-center pd-md">
      <header>{{message}}</header>
      <section>
        当前环境：
        <h4>{{basePath}}</h4>
      </section>
      <div class="text-left">
        <p>
          <router-link to="/agreement-menu">相关协议</router-link>
        </p>
        <p>
          <router-link to="/register-agreement">注册协议</router-link>
        </p>
        <p>
          <router-link to="/mybill">我的账单</router-link>
        </p>
        <p>
          <router-link to="/lend-details">出借详情</router-link>
        </p>
        <p>
          <router-link to="/sign-up-success">签约成功</router-link>
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'menulist',
  metaInfo: {
    title: '路由菜单'
  },
  data () {
    return {
      message: '大拇指首页',
      basePath: process.env.NODE_ENV
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
    initData () {
    }
  }
}
</script>

<style scoped>
  .pd-md {
    padding: 20px;
  }
</style>
