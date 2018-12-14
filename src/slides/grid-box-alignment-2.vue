<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/grid-box-alignment">Go to box-alignment</router-link>
      <router-link to="/grid-zindex">Go to z-index</router-link>
    </p>
    <div class="info">
      <h1>Box Alignment</h1>
      <p>justify-items & align-items</p>
      <p>start | end | center | stretch;</p>
      <p>justify-content & align-content</p>
      <p>start | end | center | stretch | space-around | space-between | space-evenly;</p>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 14">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">
<span>.grid-container</span> {
  display: grid;
  grid-gap: 25px;
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
    gridGap: gridGap,
    alignContent:alignContent,
    alignItems:alignItems,
    justifyItems:justifyItems,
    justifyContent:justifyContent}"
           class="grid">
        <div class="grid-item" v-for="n in 5" :class="[`grid-item-` + n]">{{n}}</div>
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
        justifyItems: 'stretch',
        alignItems: 'stretch',
        justifyContent: 'stretch',
        alignContent: 'stretch',
      }
    }
  }
</script>

<style scoped>
  .grid-item-1 {grid-area: header}
  .grid-item-2 {grid-area: sidebar}
  .grid-item-3 {grid-area: aside}
  .grid-item-4 {grid-area: main}
  .grid-item-5 {grid-area: footer}

  .grid {
    grid-template: [row1-start] 'header header header' [row1-end] [row2-start] 'sidebar aside main' [row2-end] [row3-start] 'footer footer footer' [row3-end];
  }
</style>
