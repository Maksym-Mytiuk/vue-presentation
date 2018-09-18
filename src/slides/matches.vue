<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/usage-snap-scroll">Can I use Snap Scroll</router-link>
      <router-link to="/valid">Go to :Valid</router-link>
    </p>
    <div class="info">
      <h1>:matches</h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 16">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">

:matches(.second, .third) {
  color: #000
}

button:matches(:hover, :focus){
  background-color: #2cd5c8;
}

          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
      <button class="btn first">Click Me</button>
      <button class="btn second">Click Me</button>
      <button class="btn third">Click Me</button>
      <button class="btn fourth">Click Me</button>
      <button class="btn fifth">Click Me</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        first: 'conic-gradient(from 45deg, white, black, white)',
      }
    }
  }
</script>

<style scoped>
  .grid-block{
    display: grid;
    align-items: center;
  }
  button{
    font-size: 2em;
    padding: 10px 20px;
    color: #fff;
    background-color: #26a69a;
    cursor: pointer;
    outline: none;
    border: 0;
    transition: .3s;
    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
  }
  :matches(.second, .third) {
    color: #000
  }
  button:matches(:hover, :focus){
    background-color: #2cd5c8;
    box-shadow: 0 6px 3px 0 rgba(0,0,0,0.14), 0 3px 4px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
  }

  button:active{
    background-color: #26a69a;
  }
</style>
