<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/grid-track">Go to grid-track</router-link>
      <router-link to="/rows-columns">Go to grows-columns</router-link>
    </p>
    <div class="info">
      <h1>grid-column-start grid-row-start</h1>
      <h1>grid-column-end  grid-row-end</h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 17">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">
<span>.grid-container</span> {
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
}
<span>.grid-item-1</span> {
    grid-column-start:<textarea v-model="firstCS"></textarea>
    grid-column-end:<textarea v-model="firstCE"></textarea>
    grid-row-start:<textarea v-model="firstRS"></textarea>
    grid-row-end:<textarea v-model="firstRE"></textarea>
}
<span>.grid-item-2</span> {
    grid-column-start:<textarea v-model="secondCS"></textarea>
    grid-column-end:<textarea v-model="secondCE"></textarea>
    grid-row-start:<textarea v-model="secondRS"></textarea>
    grid-row-end:<textarea v-model="secondRE"></textarea>
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
      gridColumnStart:firstCS,
      gridColumnEnd:firstCE,
      gridRowStart:firstRS,
      gridRowEnd:firstRE,
    }">1</div>
        <div class="grid-item grid-item-2" :style="{
      gridColumnStart:secondCS,
      gridColumnEnd:secondCE,
      gridRowStart:secondRS,
      gridRowEnd:secondRE,
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
        firstCS: '',
        firstCE: '',
        firstRS: '',
        firstRE: '',
        secondCS: '',
        secondCE: '',
        secondRS: '',
        secondRE: '',
      }
    }
  }
</script>

<style scoped>
h1{
  line-height: .3;
}

</style>
