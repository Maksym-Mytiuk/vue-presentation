<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/snap-scroll">Go to Snap Scroll</router-link>
      <router-link to="/usage-snap-scroll">Can I use Snap Scroll</router-link>
    </p>
    <div class="info">
      <h1>Snap Scroll</h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 19">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">

<span>.scrollport</span> {
  overflow: auto;
  scroll-snap-type: x mandatory;
}

<span>img</span> {
  scroll-snap-align: <textarea v-model="scrollValue"></textarea>;
}





//proximity
//mandatory
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
      <div class="scrollport">
        <img src="//placehold.it/600x600" :style="{scrollSnapAlign: scrollValue}" alt="">
        <img src="//placehold.it/600x600" :style="{scrollSnapAlign: scrollValue}" alt="">
        <img src="//placehold.it/600x600" :style="{scrollSnapAlign: scrollValue}" alt="">
        <img src="//placehold.it/600x600" :style="{scrollSnapAlign: scrollValue}" alt="">
        <img src="//placehold.it/600x600" :style="{scrollSnapAlign: scrollValue}" alt="">
        <img src="//placehold.it/600x600" :style="{scrollSnapAlign: scrollValue}" alt="">
        <img src="//placehold.it/600x600" :style="{scrollSnapAlign: scrollValue}" alt="">
        <img src="//placehold.it/600x600" :style="{scrollSnapAlign: scrollValue}" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        scrollValue: 'center',
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    grid-template-columns: 500px 1fr;
  }

  .grid-block{
    background-color: #fff;
  }

  .scrollport {
    width: 800px;
    margin: 60px auto;
    overflow: auto;
    white-space: nowrap;
    scroll-snap-type: x mandatory;
  }
</style>
