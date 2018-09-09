<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/blend-mode">Go to Blend Mode</router-link>
      <router-link to="/blend-mode-3">Go to Blend Mode</router-link>
    </p>
    <div class="info">
      <h1>CSS Blend Mode</h1>
      <div>
        <div class="photoshop"></div>
      </div>
    </div>

    <div>
      <div class="css-mode" :style="{backgroundBlendMode: blendMode}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        blendMode: 'hue',
      }
    }
  }
</script>

<style>
  body{
    background-color: #000;
  }
</style>

<style lang="scss" scoped>
  .css-mode {
    height: 100%;
    background: url(./../assets/images/bck.jpg) center / contain no-repeat, url(./../assets/images/girl.jpg) center / contain no-repeat;
  }

  .photoshop {
    height: 430px;
    background: url(./../assets/images/blend-mode.jpg) center / contain no-repeat;
  }
</style>
