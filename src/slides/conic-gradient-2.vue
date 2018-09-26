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
:root {
  --counter: <textarea v-model="counter"></textarea>;
}

.round {
  background: conic-gradient(
               #8E24AA var(--counter),
               #e1bee7 0deg);
}

          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block" @click="anim">
      <!--"-->
      <div class="round" :style="{background: setConicStyle}">
        <p>{{counter}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: '10%'
      }
    },
    computed: {
      setConicStyle() {
        return `conic-gradient(#8E24AA ${this.counter}, #e1bee7 0deg)`;
      }
    },
    methods: {
      anim() {
        let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        let count = 10,
          maxCount = 90,
          speed = 1,
          animationChart = () => {
            count = count + speed;
            if (count <= maxCount) {
              // document.documentElement.style.setProperty(`--main-counter`, count + `%`);
              // document.documentElement.style.setProperty(`--second-counter`, count);
              this.counter = `${count}%`;
              requestAnimationFrame(animationChart);
            }
          };
        animationChart()
      }
    }
  }
</script>
<style>
  :root {
    --main-counter: 10;
  }
</style>
<style scoped>
  .container {
    margin-top: 100px;
  }

  .grid-block {
    display: grid;
  }

  .round {
    position: relative;
    margin: auto;
    /*background: conic-gradient(#8E24AA var(--main-counter), #e1bee7 0deg);*/
    border-radius: 50%;
    width: 475px;
    height: 475px;
  }

  .round:before {
    content: "";
    position: absolute;
    width: 350px;
    height: 350px;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    background: #e5e5e5;
    transform: translate(-50%, -50%);
  }

  .round p {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 9em;
    transform: translate3d(-50%, -50%, 0);
  }
</style>
