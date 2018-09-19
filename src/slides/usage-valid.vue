<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/valid">Go to :Valid</router-link>
      <router-link to="/finish">Finish</router-link>
    </p>
    <div class="img-block">
      <img src="./../assets/images/valid.png" class="img">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang="scss">
  .container{
    display: block;
  }
  .img-block{
    width: 100%;
    text-align: center;
  }
  .img{
    width: 100%;
  }

</style>
