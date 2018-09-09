<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/usage-blend-mode">Can I use Blend Mode</router-link>
      <router-link to="/meter-2">Go to meter</router-link>
    </p>
    <div class="info">
      <h1>Meter</h1>
      <p>value</p>
      <p>min, max</p>
      <p>low, high, optimum</p>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 13">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="html">
&lt;meter value="30"
       max="100"&gt;&lt;/meter&gt;

&lt;meter value="80"
       max="100"
       high="60"&gt;&lt;/meter&gt;

&lt;meter value="95"
       max="100"
       low="20"
       high="90"
       optimum="10"&gt;&lt;/meter&gt;
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
      <p>Radiation Level</p>
      <p>30% &#9762;</p>
      <meter value="30" max="100"></meter>
      <p>80% &#9762;</p>
      <meter value="80" max="100" high="60"></meter>
      <p>95% &#9762;</p>
      <meter value="95" max="100" low="20" high="90" optimum="10"></meter>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped lang="scss">
  .grid-block {
    background: white;
    p {
      margin: 0 0 100px;
      font-size: 3em;
      text-align: center;
      &:not(:first-of-type) {
        margin: 30px 0 0;
      }
    }
  }
  meter {
    display: flex;
    width: 100%;
    height: 65px;
  }
</style>
