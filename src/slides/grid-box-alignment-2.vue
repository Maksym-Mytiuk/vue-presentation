<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/grid-box-alignment">Go to box-alignment</router-link>
      <router-link to="/grid-track">Go to grid-track</router-link>
    </p>
    <div class="info">
      <h1>Box Alignment</h1>
      <p>justify-self & align-self</p>
      <p>start | end | center | stretch;</p>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 14">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">

<span>.grid-item-3</span> {
  justify-self: <textarea v-model="justifySelf"></textarea>
  align-self: <textarea v-model="alignSelf"></textarea>
}
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
      <div :style="{
    display: display,
    gridGap: gridGap
    }"
           class="grid">
        <div class="grid-item grid-item-1">1</div>
        <div class="grid-item grid-item-2">2</div>
        <div class="grid-item grid-item-3" :style="{justifySelf:justifySelf,alignSelf:alignSelf}">3</div>
        <div class="grid-item grid-item-4">4</div>
        <div class="grid-item grid-item-5">5</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        display: 'grid',
        gridGap: '25px',
        justifySelf: 'stretch',
        alignSelf: 'stretch',
      }
    }
  }
</script>

<style scoped>
  .grid-item-1 {
    grid-area: header
  }

  .grid-item-2 {
    grid-area: sidebar
  }

  .grid-item-3 {
    grid-area: aside
  }

  .grid-item-4 {
    grid-area: main
  }

  .grid-item-5 {
    grid-area: footer
  }

  .grid {
    grid-template: [row1-start] 'header header header' [row1-end] [row2-start] 'sidebar aside main' [row2-end] [row3-start] 'footer footer footer' [row3-end];
  }
</style>
