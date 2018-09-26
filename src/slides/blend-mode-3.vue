<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/blend-mode">Go to Blend Mode</router-link>
      <router-link to="/usage-blend-mode">Go to Can I use Blend Mode</router-link>
    </p>
    <div class="info">
      <h1>CSS Blend Mode</h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 18">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">

<span>.text</span> {
  mix-blend-mode: <textarea v-model="blendMode"></textarea>;
  color: <textarea v-model="color"></textarea>;
  background: <textarea v-model="bgColor"></textarea>;
}








// normal | multiply | screen |
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
      <div class="css-mode">
        <p class="text" :style="{mixBlendMode: blendMode, color: color, backgroundColor: bgColor}">
          БУДЬМО!!!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        blendMode: 'screen',
        color: '#000',
        bgColor: '#fff',
      }
    }
  }
</script>

<style>
  body {
    background-color: #fff;
  }
</style>

<style lang="scss" scoped>
  .container {
    margin-top: 100px;
    grid-template-columns: 500px 1fr;
  }

  .text {
    position: absolute;
    bottom: 101px;
    width: 82%;
    right: 0;
    margin: 0;
    padding: 0;
    font-size: 8em;
    font-weight: 900;
    color: black;
    background: white;
    text-align: center;
    mix-blend-mode: normal;
  }

  .css-mode {
    position: relative;
    height: 100%;
    background: url(./../assets/images/beer3.jpg)  0 0 / cover no-repeat
  }

</style>
