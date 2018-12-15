<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/grid-box-alignment-2">Go to box-alignment</router-link>
      <router-link to="/grid-track">Go to grid-track</router-link>
    </p>
    <div class="info">
      <h1>Grid z-index</h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 19">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">


<span>.grid-item-1</span> {
    grid-area:<textarea v-model="firstArea"></textarea>
    z-index:<textarea v-model="firstAreaZindex"></textarea>
}
<span>.grid-item-2</span> {
    grid-area:<textarea v-model="secondArea"></textarea>
    z-index:<textarea v-model="secondAreaZindex"></textarea>
}
<span>.grid-item-3</span> {
    grid-area:<textarea v-model="thirdArea"></textarea>
    z-index:<textarea v-model="thirdAreaZindex"></textarea>
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
        <div class="grid-item grid-item-1" :style="{gridArea:firstArea,zIndex:firstAreaZindex}">1</div>
        <div class="grid-item grid-item-2" :style="{gridArea:secondArea,zIndex:secondAreaZindex}">2</div>
        <div class="grid-item grid-item-3" :style="{gridArea:thirdArea,zIndex:thirdAreaZindex}">3</div>
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
        thirdArea: '',
        firstAreaZindex: '',
        secondAreaZindex: '',
        thirdAreaZindex: '',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .grid-item{
    background: rgba(15, 255, 0, .6);
    &:nth-of-type(2){
      background: rgba(0, 141, 255, .6);
     }
    &:nth-of-type(3){
      background: rgba(255, 0, 19, .6);
     }
  }
</style>

