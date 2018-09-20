<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/usage-vf">Can I use VF</router-link>
      <router-link to="/usage-bf">Can I use BF</router-link>
    </p>
    <div class="info">
      <h1>BACKDROP Filter</h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 16">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">

<span>.filter</span> {
  backdrop-filter: <textarea v-model="backDropFilter"></textarea>
}

// blur(2px);
// brightness(60%);
// contrast(40%);
// drop-shadow(4px 4px 10px blue);
// grayscale(30%);
// hue-rotate(120deg);
// invert(70%);
// opacity(20%);
// sepia(90%);
// saturate(80%);
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
      <div class="css-mode">
        <div class="filter" :style="{backdropFilter: backDropFilter}"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        backDropFilter: 'inherit',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    margin-top: 100px;
  }
  .css-mode {
    position: relative;
    height: 100%;
    background: url(./../assets/images/prague.jpg) 0 0 / cover no-repeat;
    .filter {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
