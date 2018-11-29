<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/">Go to Home</router-link>
      <router-link to="/display-grid">Go to display: grid;</router-link>
    </p>
    <div class="theme">
      <h1>
        CSS GRID
      </h1>
    </div>
  </div>
</template>

<script>
	export default {
		name: "home"
	}
</script>

<style scoped lang="scss">
  .container{
    display: block;
  }
  .theme{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    h1{
      font-size: 5em;
    }
  }
</style>
