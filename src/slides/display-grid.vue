<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/">Go to Home</router-link>
      <router-link to="/grid-template">Go to grid-template</router-link>
    </p>
    <div class="info">
      <h1>Hello I'm Display GRID!</h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 18">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">


<span>.grid-container</span> {
  display: <textarea name="grid" id="grid" v-model="display"></textarea>
}
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
      <div :style="{display: display}" class="grid">
        <div class="grid-item" v-for="n in 7" :class="[`grid-item-` + n]">{{n}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "display-grid",
    data() {
      return {
        display: 'flex',
      }
    }
  }
</script>

<style scoped>
.styles{
  margin-top: 4em;
}
</style>
