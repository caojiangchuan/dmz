<template>
  <div class="notFound">
    <img src="../assets/img/404.png" class="img404"/>
    <p class='notTxt'>在这个星球中找不到</p>
  </div>
</template>

<script>
export default {
  name: 'notFound',
  metaInfo: {
    title: '出错了404'
  }
}
</script>

<style scoped>
  .notFound{
    background:#eee;
    display:flex;
    flex-direction: column;
    justify-content: center;
    height:100vh;
    align-items: center;
  }
  .img404{
    width:195px;
    height:167px;
  }
  .notTxt{
    text-align: center;
    margin-top: 10px;
  }
</style>
