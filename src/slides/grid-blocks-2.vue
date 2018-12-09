<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/grid-period-table">Go to example 2</router-link>
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

<span>.grid-item:nth-of-type(2n + 4)</span> {
    grid-column:<textarea v-model="columnProp"></textarea>
}
<span>.grid-item:nth-of-type(2n + 6)</span> {
    grid-row:<textarea v-model="rowProp"></textarea>
}
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '25px',
        gridAutoFLow: 'row',
        columnProp: '',
        rowProp: ''
      }
    }
  }
</script>

<style scoped>

</style>
