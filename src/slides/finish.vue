<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/usage">Go to usage</router-link>
    </p>
    <div class="theme">
      <h1>
        Вопросы?
      </h1>
    </div>
  </div>
</template>

<script>
	export default {
		name: "finish"
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
