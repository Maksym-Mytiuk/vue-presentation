<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/">Go to Home</router-link>
      <router-link to="/grid-template">Go to grid-template</router-link>
    </p>
    <div class="info">
      <h1>Hello I'm Display GRID!</h1>
      <input type="range" v-model="firstValue" value="100" min="100" max="900" step="1">
      <input type="range" v-model="secondValue"  value="0" min="0" max="1" step="0.01" >
      <div class="styles">
        <div class="counter">
          <p v-for="n in 18">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">


<span>.grid-container</span> {
  display: <textarea name="grid" id="grid" v-model="display"></textarea>
}
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
      <p class="vf" :style="{fontVariationSettings: fontSettings}">Hello World!</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "variable-fonts",
    data() {
      return {
        firstValue: 100,
        secondValue: 0
      }
    },
    computed: {
      fontSettings() {
        return `"wght" ${this.firstValue} , "ital" ${this.secondValue}`;
      }
    }
  }
</script>

<style scoped>
  .vf{
    font-family: Renner;
    font-size: 92px;
    /*font-variation-settings: "wght" 554.11, "ital" 0.13;*/
  }
  .grid-block{
    display: grid;
    align-items: center;
    justify-content: center;
  }
.styles{
  margin-top: 4em;
}
</style>
