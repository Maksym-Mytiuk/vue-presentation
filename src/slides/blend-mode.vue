<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/variable-fonts">Go to display-grid</router-link>
      <router-link to="/grid-gap">Go to grid-gap</router-link>
    </p>
    <div class="info">
      <h1>CSS Blend Mode</h1>
      <p>fr, auto-fill</p>
      <p>repeat, minmax</p>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 15">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">

<span>.grid-container</span> {
  display: grid;
  grid-template-columns: <textarea name="grid" v-model="gridTemplateColumns"></textarea>
  grid-template-rows: <textarea name="grid" v-model="gridTemplateRows"></textarea>
}
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        display: '',
        gridTemplateColumns: '',
        gridTemplateRows: '',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .grid-block{
    background: url(./../assets/images/bck.jpg) 0 0 / contain no-repeat, url(./../assets/images/girl.jpg) 0 0 / contain no-repeat;
    background-blend-mode: multiply;
  }
</style>
