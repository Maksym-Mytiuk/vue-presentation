<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/display-grid">Go to display-grid</router-link>
      <router-link to="/grid-gap">Go to grid-gap</router-link>
    </p>
    <div class="info">
      <h1>grid-template-columns </h1><h1 style="margin: 1em 0;"> grid-template-rows </h1>
      <p>fr, auto-fill</p>
      <p>repeat, minmax</p>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 15">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">

<span>.grid-container</span> {
  display: grid;
  grid-template-columns: <textarea name="grid" v-model="gridTemplateColumns"></textarea>
  grid-template-rows: <textarea name="grid" v-model="gridTemplateRows"></textarea>
}
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
      <div :style="{display: display, gridTemplateColumns: gridTemplateColumns, gridTemplateRows: gridTemplateRows}" class="grid">
        <div class="grid-item" v-for="n in 12" :class="[`grid-item-` + n]">{{n}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        display: 'grid',
        gridTemplateColumns: '',
        gridTemplateRows: '',
      }
    }
  }
</script>
