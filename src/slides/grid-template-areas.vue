<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/grid-gap">Go to grid-gap</router-link>
      <router-link to="/grid-box-alignment">Go to box-alignment</router-link>
    </p>
    <div class="info">
      <h1>GRID-TEMPLATE-AREAS</h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 19">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">
<span>.grid-item-1</span>{grid-area: header;}
<span>.grid-item-2</span>{grid-area: sidebar;}
<span>.grid-item-3</span>{grid-area: main;}
<span>.grid-item-4</span>{grid-area: footer;}

<span>.grid-container</span> {
  display: grid;
  grid-gap: 25px;
  grid-template-rows: <textarea v-model="gridTemplateRows"></textarea>
  grid-template-columns: <textarea v-model="gridTemplateColumns"></textarea>

  grid-template-areas: <textarea style="height: 80px" v-model="gridTemplateAreas"></textarea>
}
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
      <div :style="{
    display: display,
    gridTemplateColumns: gridTemplateColumns,
    gridGap: gridGap,
    gridTemplateAreas: gridTemplateAreas,
    gridTemplateRows: gridTemplateRows}"
           class="grid">
        <div class="grid-item" v-for="n in 4" :class="[`grid-item-` + n]">{{n}}</div>
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
        gridTemplateRows: '50px 1fr 50px',
        gridGap: '25px',
        gridTemplateAreas: '',
      }
    }
  }
</script>

<style scoped>
  .grid-item-1 {grid-area: header}
  .grid-item-2 {grid-area: sidebar}
  .grid-item-3 {grid-area: main}
  .grid-item-4 {grid-area: footer}
</style>
