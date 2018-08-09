<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/grid-template">Go to grid-template</router-link>
      <router-link to="/grid-template-areas">Go to grid-template-areas</router-link>
    </p>
    <div class="info">
      <h1>GRID-GAP</h1>
      <p>grid-column-gap</p>
      <p>grid-row-gap</p>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 16">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">

<span>.grid-container</span> {
  display: grid;
  grid-template-columns: <textarea name="grid" v-model="gridTemplateColumns"></textarea>
  grid-gap: <textarea name="grid" v-model="gridGap"></textarea>
}
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
      <div :style="{display: display, gridTemplateColumns: gridTemplateColumns, gridGap: gridGap}" class="grid">
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
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '25px 50px',
      }
    }
  }
</script>
