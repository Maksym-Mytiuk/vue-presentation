<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/variable-fonts">Go to Variable Fonts</router-link>
    </p>
    <div class="theme">
      <h1>
        CSS TRICKS
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
  a{
    margin-left: auto;
  }
  .container{
    display: block;
  }
  .theme{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    h1{
      font-size: 10em;
    }
  }
</style>
