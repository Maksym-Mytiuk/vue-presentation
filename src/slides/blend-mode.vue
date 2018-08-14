<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/variable-fonts">Go to display-grid</router-link>
      <router-link to="/grid-gap">Go to grid-gap</router-link>
    </p>
    <div class="info">
      <h1>CSS Blend Mode</h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 15">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">

<span>.wrapper</span> {
  background: url(./../assets/images/bck.jpg),
              url(./../assets/images/girl.jpg)
  background-blend-mode: <textarea name="grid" v-model="blendMode"></textarea>;
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
      <div class="photoshop"></div>
      <div class="css-mode" :style="{backgroundBlendMode: blendMode}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        blendMode: 'multiply',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .photoshop{
    height: 50%;
    background: url(./../assets/images/blend-mode.jpg) 0 0 / contain no-repeat;
  }
  .css-mode{
    height: 50%;
    background: url(./../assets/images/bck.jpg) 0 0 / contain no-repeat, url(./../assets/images/girl.jpg) 0 0 / contain no-repeat;
  }
</style>
