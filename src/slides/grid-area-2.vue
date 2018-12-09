<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/grid-area">Go to grid-area</router-link>
      <router-link to="/grid-zindex">Go to z-index</router-link>
    </p>
    <div class="info">
      <h1>Grid Area</h1>
      <div class="wrapper">
        <div class="row">
          <div class="column">grid-column-start</div>
          <div class="column">grid-column-end</div>
          <div class="column">grid-row-start</div>
          <div class="column">grid-row-end</div>
        </div>
        <div class="row">
          <div class="column">grid-column</div>
          <div class="column">grid-row</div>
        </div>
        <div class="row">
          <div class="column">grid-area</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .container {
    display: block;
  }

  .row {
    display: flex;
    &:nth-of-type(2) {
      .column {
        border-top: 0;
        border-bottom: 0;
      }
    }
  }

  .column {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 200px;
    font-size: 2.5em;
    border: 2px solid;
    border-right: 0;
    &:last-of-type {
      border-right: 2px solid;
    }
  }
</style>
