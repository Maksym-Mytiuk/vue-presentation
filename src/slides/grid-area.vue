<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/rows-columns">Go to grows-columns</router-link>
      <router-link to="/grid-auto-flow">Go to grid-auto-flow</router-link>
    </p>
    <div class="info">
      <h1>Grid Area</h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 19">{{ n }}</p>
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
    grid-area:<textarea v-model="firstArea"></textarea>
}

<span>.grid-item-2</span> {
    grid-area:<textarea v-model="secondArea"></textarea>
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
      gridArea:firstArea,
    }">1
        </div>
        <div class="grid-item grid-item-2" :style="{
      gridArea:secondArea,
    }">2
        </div>
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
        firstArea: '',
        secondArea: '',
      }
    }
  }
</script>

<style scoped>

</style>
