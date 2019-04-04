<template>
  <div class="root">
    <img src="../assets/img/sorry.png" class="sorry" alt="sorry"/>
    <p class="tipsTxt">网站正在建设中，敬请期待...</p>
  </div>
</template>

<script>
export default {
  name: 'status666',
  metaInfo: {
    title: '敬请期待'
  }
}
</script>

<style scoped>
  .root{
    background: #eee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    align-items: center;
    align-content: center;
  }
  .sorry{
    width: 214px;
    height: 202px;
  }
  .tipsTxt{
    text-align: center;
    margin-top: 10px;
  }

</style>
