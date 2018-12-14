<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/grid-zindex">Go to z-index</router-link>
      <router-link to="/start-end">Go to start-end</router-link>
    </p>
    <div class="img-block">
      <img src="./../assets/grid.png" class="img">
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
    width: 70%;
  }

</style>
