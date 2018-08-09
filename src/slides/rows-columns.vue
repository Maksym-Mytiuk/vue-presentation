<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/start-end">Go to start-end</router-link>
      <router-link to="/grid-area">Go to grid-area</router-link>
    </p>
    <div class="info">
      <h1>grid-column </h1>
      <h1>grid-row </h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 17">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">
<span>.grid-container</span> {
  display: grid;
  grid-gap; 25px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
}
<span>.grid-item-1</span> {
    grid-column:<textarea v-model="firstC"></textarea>
    grid-row:<textarea v-model="firstR"></textarea>
}
<span>.grid-item-2</span> {
    grid-column:<textarea v-model="secondC"></textarea>
    grid-row:<textarea v-model="secondR"></textarea>
}
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
      <div :style="{
    display: display,
    gridGap: gridGap,
    gridTemplateColumns: gridTemplateColumns,
    gridTemplateRows: gridTemplateRows
  }"
           class="grid">
        <div class="grid-item grid-item-1" :style="{
      gridColumn:firstC,
      gridRow:firstR,
    }">1</div>
        <div class="grid-item grid-item-2" :style="{
      gridColumn:secondC,
      gridRow:secondR,
    }">2</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        gridGap: '25px',
        firstC: '',
        firstR: '',
        secondC: '',
        secondR: '',
      }
    }
  }
</script>

<style scoped>
  h1{
    line-height: .3;
  }
</style>
