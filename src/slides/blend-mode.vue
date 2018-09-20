<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/usage-bf">Can I usage BF</router-link>
      <router-link to="/blend-mode-2">Go to Blend Mode</router-link>
    </p>
    <div class="info">
      <h1>CSS Blend Mode</h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 17">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">

<span>.wrapper</span> {
  background: url(./../assets/images/bck.jpg),
              url(./../assets/images/girl.jpg)
  background-position: <textarea v-model="backgroundPosition"></textarea>;
  background-blend-mode: <textarea v-model="blendMode"></textarea>;
}





// normal | multiply | screen | overlay
// darken | lighten | color-dodge | color-burn
// hard-light | soft-light | difference | exclusion
// hue | saturation | color | luminosity
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block" >
      <div class="css-mode" :style="{backgroundBlendMode: blendMode, backgroundPosition: backgroundPosition}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        backgroundPosition: '',
        blendMode: 'normal',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    margin-top: 75px;
  }
  .css-mode{
    height: 100%;
    background: url(./../assets/images/bck.jpg) 0 0 / contain no-repeat, url(./../assets/images/girl.jpg)  0 280px / contain no-repeat;
  }
</style>
