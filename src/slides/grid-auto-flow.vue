<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/grid-area">Go to grid-area</router-link>
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
<span>.grid-container</span> {
  grid-auto-flow: <textarea v-model="gridAutoFLow"></textarea>
}

<span>.grid-item-1</span> {
    grid-area:<textarea v-model="firstArea"></textarea>
}
<span>.grid-item-2</span> {
    grid-area:<textarea v-model="secondArea"></textarea>
}
<span>.grid-item-3</span> {
    grid-area:<textarea v-model="thirdArea"></textarea>
}
<span>.grid-item-4</span> {
    grid-area:<textarea v-model="fourthArea"></textarea>
}
<span>.grid-item-5</span> {
    grid-area:<textarea v-model="fifthArea"></textarea>
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
    gridTemplateRows: gridTemplateRows,
    gridAutoFlow: gridAutoFLow,
  }"
           class="grid">
        <div class="grid-item grid-item-1" :style="{
      gridArea:firstArea,
    }">1</div>
        <div class="grid-item grid-item-2" :style="{
      gridArea:secondArea,
    }">2</div>
        <div class="grid-item grid-item-2" :style="{
      gridArea:thirdArea,
    }">3</div>
        <div class="grid-item grid-item-2" :style="{
      gridArea:fourthArea,
    }">4</div>
        <div class="grid-item grid-item-2" :style="{
      gridArea:fifthArea,
    }">5</div>
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
        gridAutoFLow: 'row',
        firstArea: '',
        secondArea: '',
        thirdArea: '',
        fourthArea: '',
        fifthArea: '',
      }
    }
  }
</script>

<style scoped>
  .styles{
    margin-top: 4em;
  }
</style>
