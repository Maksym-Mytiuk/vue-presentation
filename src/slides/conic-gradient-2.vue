<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/conic-gradient">Go to Conic Gradient</router-link>
      <router-link to="/usage-cg">Can I use CG</router-link>
    </p>
    <div class="info">
      <h1>Conic Gradient</h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 16">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">
.round {
  background: conic-gradient(#8E24AA var(--main-counter), #e1bee7 0deg);
}

.round:after {
  counter-increment: percent var(--second-counter);
  content: counter(percent) '%';
}
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
      <div class="round"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        first: 'conic-gradient(from 45deg, white, black, white)',
      }
    },
    mounted() {
      setTimeout(() => {
        let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        let count = 10,
          maxCount = 90,
          speed = 1,
          animationChart = () => {
            count = count + speed;
            if (count <= maxCount) {
              document.documentElement.style.setProperty(`--main-counter`, count + `%`);
              document.documentElement.style.setProperty(`--second-counter`, count);
              requestAnimationFrame(animationChart);
            }
          };
        animationChart();
      }, 1500)
    }
  }
</script>
<style>
  :root {
    --main-counter: 10%;
    --second-counter: 10;
  }
</style>
<style scoped>
  .grid-block {
    display: grid;
  }

  .round {
    position: relative;
    margin: auto;
    background: conic-gradient(#8E24AA var(--main-counter), #e1bee7 0deg);
    border-radius: 50%;
    width: 40vh;
    height: 40vh;
  }

  .round:before {
    content: "";
    position: absolute;
    width: 35vh;
    height: 35vh;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    background: #e5e5e5;
    transform: translate(-50%, -50%);
  }

  .round:after {
    counter-increment: percent var(--second-counter);
    content: counter(percent) '%';
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 10vh;
    transform: translate(-50%, -50%);
  }
</style>
