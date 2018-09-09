<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/usage-meter">Can I use Meter</router-link>
      <router-link to="/conic-gradient-2">Go to Conic Gradient</router-link>
    </p>
    <div class="info">
      <h1>Conic Gradient</h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 16">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">
<span>.grid-item-1</span> {
 background:
  <textarea v-model="first"></textarea>
}
<span>.grid-item-2</span> {
 background:
  <textarea v-model="second"></textarea>
}
<span>.grid-item-3</span> {
 background:
  <textarea v-model="third"></textarea>
}
<span>.grid-item-4</span> {
 background:
  <textarea v-model="fourth"></textarea>
}
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
      <div class="grid-item grid-item-1" :style="{backgroundImage: first}"></div>
      <div class="grid-item grid-item-2" :style="{backgroundImage: second}"></div>
      <div class="grid-item grid-item-3" :style="{backgroundImage: third}"></div>
      <div class="grid-item grid-item-4" :style="{backgroundImage: fourth}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        first: 'conic-gradient(from 45deg, white, black, white)',
        second: 'repeating-conic-gradient(gold, #f06 20deg)',
        third: 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)',
        fourth: 'conic-gradient(black 25%, white 0deg 50%, black 0deg 75%, white 0deg)',
      }
    }
  }
</script>

<style scoped>
  .grid-block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  .grid-item-4 {
    background-size: 60px 60px;
  }
</style>
