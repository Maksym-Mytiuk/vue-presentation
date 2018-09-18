<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/usage-snap-scroll">Can I use Snap Scroll</router-link>
      <router-link to="/valid">Go to :Valid</router-link>
    </p>
    <div class="info">
      <h1>:matches</h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 16">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">
:matches(.second, .third){
  color: #ff00ff
}

&lt;p class="first">Lorem... &lt;/p>
&lt;p class="second">Lorem... &lt;/p>
&lt;p class="third">Lorem... &lt;/p>
&lt;p class="fourth">Lorem... &lt;/p>
&lt;p class="fifth">Lorem... &lt;/p>
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
      <p class="first">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus, ad aliquam debitis
        doloribus et
        laborum nostrum quibusdam quidem ratione sequi sit soluta suscipit. Animi corporis iure laboriosam numquam
        quas.</p>
      <p class="second">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus, ad aliquam debitis
        doloribus et
        laborum nostrum quibusdam quidem ratione sequi sit soluta suscipit. Animi corporis iure laboriosam numquam
        quas.</p>
      <p class="third">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus, ad aliquam debitis
        doloribus et
        laborum nostrum quibusdam quidem ratione sequi sit soluta suscipit. Animi corporis iure laboriosam numquam
        quas.</p>
      <p class="fourth">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus, ad aliquam debitis
        doloribus et
        laborum nostrum quibusdam quidem ratione sequi sit soluta suscipit. Animi corporis iure laboriosam numquam
        quas.</p>
      <p class="fifth">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus, ad aliquam debitis
        doloribus et
        laborum nostrum quibusdam quidem ratione sequi sit soluta suscipit. Animi corporis iure laboriosam numquam
        quas.</p>
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

<style scoped>
  :matches(.second, .third) {
    color: #ff00ff
  }
</style>
