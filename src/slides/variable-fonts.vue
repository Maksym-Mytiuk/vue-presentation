<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/">Go to Home</router-link>
      <router-link to="/usage-vf">Can i use VF</router-link>
    </p>
    <div class="info">
      <h1>VARIABLE FONTS</h1>
      <div class="grid">
        <div class="controls">
          <div class="range">
            <input type="range" v-model="wght" value="100" min="100" max="1000" step="1"><span>"wght" {{ wght }}</span>
          </div>
          <div class="range">
            <input type="range" v-model="wdth" value="10" min="10" max="200" step="1"><span>"wdth" {{ wdth }}</span>
          </div>
          <div class="range">
            <input type="range" v-model="ital" value="0" min="0" max="1" step="0.01"><span>"ital" {{ ital }}</span>
          </div>
        </div>
        <div class="styles">
          <div class="counter">
            <p v-for="n in 7">{{ n }}</p>
          </div>
          <div class="css-area">
          <pre rel="css">
@font-face {
  font-family: Compressa;
  src: url('src/assets/fonts/compressa.woff2') format('woff-variations');
}
#helloWorld {
  font-variation-settings: "wght" {{ wght }}, "wdth" {{ wdth }}, "ital" {{ ital }};
}
          </pre>
          </div>
        </div>
      </div>

      <p id="vf" :style="{fontVariationSettings: fontSettings}">Hello World!</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "variable-fonts",
    data() {
      return {
        wght: 500,
        wdth: 50,
        ital: 0
      }
    },
    computed: {
      fontSettings() {
        return `"wght" ${this.wght} , "wdth" ${this.wdth}, "ital" ${this.ital}`;
      }
    }
  }
</script>

<style scoped lang="scss">
  .grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .container {
    grid-template-columns: none;
  }

  h1 {
    margin-bottom: 25px;
  }

  #vf {
    font: 500 136px / 1 compressa;
    text-align: center;
  }

  .controls{
    display: grid;
    align-items: center;
    .range {
      height: calc(100% / 3);
      span {
        font-size: 22px;
        margin-left: 25px;
      }
    }
  }

  .styles{
    min-height: auto;
    height: 285px;
  }


</style>
