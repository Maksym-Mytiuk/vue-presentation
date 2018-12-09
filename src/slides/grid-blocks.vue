<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/grid-period-table">Go to example 1</router-link>
      <router-link to="/grid-blocks-2">Go to example 3</router-link>
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
      <div class="row">
        <div class="column grid-item">1</div>
        <div class="column grid-item">2</div>
        <div class="column grid-item">3</div>
      </div>
      <div class="row">
        <div class="column grid-item">4</div>
        <div class="column grid-item">5</div>
      </div>
      <div class="row">
        <div class="column grid-item">6</div>
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
        gridGap: '25px',
        gridAutoFLow: 'row',
        columnProp: '',
        rowProp: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .row{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &:nth-of-type(2){
      justify-content: space-around;
    }
    &:nth-of-type(3){
      justify-content: center;
    }
    .column{
      margin: 5px;
      padding: 75px;
      background: #0092dd;
    }
  }
</style>
