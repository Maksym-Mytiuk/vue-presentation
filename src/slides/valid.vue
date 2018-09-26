<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/usage-snap-scroll">Can I use Snap Scroll</router-link>
      <router-link to="/usage-valid">Can I use Valid</router-link>
    </p>
    <div class="info">
      <h1>:valid :invalid</h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 19">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">
<span>.email:invalid + .smile:before</span> {
  content: '😒';
}

<span>.email:focus:invalid + .smile:before</span> {
  content: '😓';
}

<span>.email:valid + .smile:before</span> {
  content: '🤗';
}
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
      <div class="wrapper">
        <form class="form-signin">
          <h2 class="form-signin-heading">Please login</h2>
          <input type="email" class="form-control email" name="username" required placeholder="Email Address"
                 pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
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
  pre{
    font-size: 2.2em;
  }
  .wrapper {
    position: relative;
  }

  .form-signin {
    padding: 55px 55px 525px;
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
      font-size: 3em;
      height: auto;
      padding: 10px;

      &:focus {
        z-index: 2;
      }
    }
    input {
      width: 100%;
    }

    .email + .smile:before{
      position: absolute;
      font-size: 16em;
      top: 43%;
      right: 24%;
      z-index: 5;
    }

    .email:focus:invalid + .smile:before {
      content: '😓';
    }

    .email:invalid + .smile:before {
      content: '😒';
    }

    .email:valid + .smile:before {
      content: '🤗';
    }
  }

</style>
