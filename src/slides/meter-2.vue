<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/meter">Go to Meter</router-link>
      <router-link to="/usage-meter">Can I use Meter</router-link>
    </p>
    <div class="info">
      <h1>Meter</h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 16">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">
<span>meter</span> {
  -webkit-appearance: none;
  background: url('data:image/svg+xml,
     &lt;svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 100 100"&gt;\
         &lt;text font-size="100" opacity=".2">&#x2605;&lt;/text&gt;
     &lt;/svg&gt;') 0 / auto 100%;
}

<span>meter::-webkit-meter-optimum-value</span> {
   background: url('data:image/svg+xml,&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"&gt;\&lt;text font-size="100" y=".8em" fill="#ffcc00"&gt;&#x2605;&lt;/text&gt;&lt;/svg&gt;' 0 / auto 100%;
}

          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
      <input type="range" v-model="rangeValue"  min="0" max="5" step=".01">
      <meter min="0" max="5" :value="rangeValue"></meter>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rangeValue: 3.5
      }
    }
  }
</script>

<style scoped>
  .grid-block{
    display: grid;
    position: relative;
  }
  meter {
    margin: auto;
    width: 44em;
    height: 9em;
    -webkit-appearance: none;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\<text font-size="100" y=".8em" opacity=".2">&#x2605;</text></svg>') 0 / auto 100%;
  }

  meter::-webkit-meter-optimum-value {
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\<text font-size="100" y=".8em" fill="#ffcc00">&#x2605;</text></svg>') 0 / auto 100%;
  }

  meter::-webkit-meter-bar {
    background: transparent;
  }
    meter::-webkit-meter-inner-element {
      display: block;
  }
  input{
    width: 44em;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
