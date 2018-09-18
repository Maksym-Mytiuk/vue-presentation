<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/matches">Go to Matches</router-link>
      <router-link to="/finish">Go to Question</router-link>
    </p>
    <div class="info">
      <h1>Conic Gradient</h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 16">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">
.round {
  background: conic-gradient(#8E24AA var(--main-counter), #e1bee7 0deg);
}
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
      <div class="wrapper">
        <form class="form-signin">
          <h2 class="form-signin-heading">Please login</h2>
          <input type="email" class="form-control email" name="username" placeholder="Email Address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
          <div class="smile"></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        first: 'conic-gradient(from 45deg, white, black, white)',
      }
    }
  }
</script>

<style lang="scss" scoped>

  .form-signin {
    padding: 55px 55px 455px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);

    .form-signin-heading,
    .checkbox {
      margin-bottom: 30px;
    }

    .checkbox {
      font-weight: normal;
    }

    .form-control {
      position: relative;
      font-size: 16px;
      height: auto;
      padding: 10px;

      &:focus {
        z-index: 2;
      }
    }
    input {
      width: 100%;
    }

    .email:focus:invalid + .smile:before{
      content: '';
      position: absolute;
    }
  }

</style>
