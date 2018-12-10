<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/grid-blocks">Go to example 2</router-link>
      <router-link to="/usage">Go to usage</router-link>
    </p>
    <div class="info">
      <h1>Grid Auto Flow</h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 18">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">
<span>.grid-item-1:</span> {grid-area: item1}
<span>.grid-item-2:</span> {grid-area: item2}
<span>.grid-item-3:</span> {grid-area: item3}
<span>.grid-item-4:</span> {grid-area: item4}
<span>.grid-item-5:</span> {grid-area: item5}
<span>.grid-item-6:</span> {grid-area: item6}

grid-template-rows: <textarea v-model="gridTemplateRows"></textarea>
grid-template-columns: <textarea v-model="gridTemplateColumns"></textarea>
grid-template-areas: <textarea style="height: 133px" v-model="gridTemplateAreas"></textarea>
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block" :style="{gridTemplateAreas: gridTemplateAreas, gridTemplateColumns: gridTemplateColumns, gridTemplateRows: gridTemplateRows}">
      <div class="grid-item" v-for="n in 6" :class="[`grid-item-` + n]">{{n}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        gridTemplateAreas: '',
        gridTemplateColumns: '',
        gridTemplateRows: '',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .grid-block{
    display: grid;
  }
  .grid-item{
    &:nth-of-type(1){
      grid-area: item1;
    }
    &:nth-of-type(2){
      grid-area: item2;
    }
    &:nth-of-type(3){
      grid-area: item3;
    }
    &:nth-of-type(4){
      grid-area: item4;
    }
    &:nth-of-type(5){
      grid-area: item5;
    }
    &:nth-of-type(6){
      grid-area: item6;
    }
  }
</style>
