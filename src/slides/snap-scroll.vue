<template>
  <div class="container">
    <p style="position: absolute; top: 0;">
      <router-link to="/usage-cg">Can I use CG</router-link>
      <router-link to="/snap-scroll2">Go to Snap Scroll</router-link>
    </p>
    <div class="info">
      <h1>Snap Scroll</h1>
      <div class="styles">
        <div class="counter">
          <p v-for="n in 16">{{ n }}</p>
        </div>
        <div class="css-area">
          <pre rel="css">

<span>html</span> {
  scroll-behavior: <textarea v-model="first"></textarea>;
}
          </pre>
        </div>
      </div>
    </div>

    <div class="grid-block">
      <nav>
        <ul>
          <li><a href="#section-1">Section 1</a></li>
          <li><a href="#section-2">Section 2</a></li>
          <li><a href="#section-3">Section 3</a></li>
          <li><a href="#section-4">Section 4</a></li>
          <li><a href="#section-5">Section 5</a></li>
          <li><a href="#section-6">Section 6</a></li>
        </ul>
      </nav>
      <main class="css-area" :style="{scrollBehavior: first}">
        <section id="section-1">
          <h1>Section 1</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi
            pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi
            pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi
            pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi
            pariatur quaerat quos expedita?</p>
        </section>
        <section id="section-2">
          <h1>Section 2</h1>
          <p>Ratione nulla nam, ipsa dignissimos corrupti veniam nostrum, laudantium asperiores sequi numquam placeat
            velit voluptate in praesentium non labore unde incidunt laborum maxime quae magni.</p>
          <p>Ratione nulla nam, ipsa dignissimos corrupti veniam nostrum, laudantium asperiores sequi numquam placeat
            velit voluptate in praesentium non labore unde incidunt laborum maxime quae magni.</p>
          <p>Ratione nulla nam, ipsa dignissimos corrupti veniam nostrum, laudantium asperiores sequi numquam placeat
            velit voluptate in praesentium non labore unde incidunt laborum maxime quae magni.</p>
        </section>
        <section id="section-3">
          <h1>Section 3</h1>
          <p>Soluta quibusdam ad nostrum vel voluptate delectus sequi dolores quia quaerat officia corrupti, aperiam
            fugit facere debitis repudiandae praesentium sapiente inventore repellendus, nemo commodi alias!</p>
          <p>Soluta quibusdam ad nostrum vel voluptate delectus sequi dolores quia quaerat officia corrupti, aperiam
            fugit facere debitis repudiandae praesentium sapiente inventore repellendus, nemo commodi alias!</p>
          <p>Soluta quibusdam ad nostrum vel voluptate delectus sequi dolores quia quaerat officia corrupti, aperiam
            fugit facere debitis repudiandae praesentium sapiente inventore repellendus, nemo commodi alias!</p>
          <p>Soluta quibusdam ad nostrum vel voluptate delectus sequi dolores quia quaerat officia corrupti, aperiam
            fugit facere debitis repudiandae praesentium sapiente inventore repellendus, nemo commodi alias!</p>
        </section>
        <section id="section-4">
          <h1>Section 4</h1>
          <p>Aliquid aliquam magnam ducimus similique obcaecati, unde exercitationem laborum incidunt, quas in ipsum
            inventore nostrum? Blanditiis optio cumque earum iste odio! Alias sint accusamus repudiandae</p>
          <p>Aliquid aliquam magnam ducimus similique obcaecati, unde exercitationem laborum incidunt, quas in ipsum
            inventore nostrum? Blanditiis optio cumque earum iste odio! Alias sint accusamus repudiandae</p>
          <p>Aliquid aliquam magnam ducimus similique obcaecati, unde exercitationem laborum incidunt, quas in ipsum
            inventore nostrum? Blanditiis optio cumque earum iste odio! Alias sint accusamus repudiandae</p>
          <p>Aliquid aliquam magnam ducimus similique obcaecati, unde exercitationem laborum incidunt, quas in ipsum
            inventore nostrum? Blanditiis optio cumque earum iste odio! Alias sint accusamus repudiandae</p>
        </section>
        <section id="section-5">
          <h1>Section 5</h1>
          <p>Officia ipsum fugit iure eaque quisquam error tempore earum enim illum, delectus officiis incidunt corrupti
            aliquid nam quas perspiciatis eveniet doloremque quod labore? Doloremque, ipsum?</p>
          <p>Officia ipsum fugit iure eaque quisquam error tempore earum enim illum, delectus officiis incidunt corrupti
            aliquid nam quas perspiciatis eveniet doloremque quod labore? Doloremque, ipsum?</p>
          <p>Officia ipsum fugit iure eaque quisquam error tempore earum enim illum, delectus officiis incidunt corrupti
            aliquid nam quas perspiciatis eveniet doloremque quod labore? Doloremque, ipsum?</p>
          <p>Officia ipsum fugit iure eaque quisquam error tempore earum enim illum, delectus officiis incidunt corrupti
            aliquid nam quas perspiciatis eveniet doloremque quod labore? Doloremque, ipsum?</p>
        </section>
        <section id="section-6">
          <h1>Section 6</h1>
          <p>Aperiam repellat dignissimos fugiat possimus esse, suscipit neque nisi libero alias obcaecati ipsam, porro
            illo corrupti nostrum reprehenderit unde, illum in laudantium impedit. Modi, veniam.</p>
          <p>Aperiam repellat dignissimos fugiat possimus esse, suscipit neque nisi libero alias obcaecati ipsam, porro
            illo corrupti nostrum reprehenderit unde, illum in laudantium impedit. Modi, veniam.</p>
          <p>Aperiam repellat dignissimos fugiat possimus esse, suscipit neque nisi libero alias obcaecati ipsam, porro
            illo corrupti nostrum reprehenderit unde, illum in laudantium impedit. Modi, veniam.</p>
          <p>Aperiam repellat dignissimos fugiat possimus esse, suscipit neque nisi libero alias obcaecati ipsam, porro
            illo corrupti nostrum reprehenderit unde, illum in laudantium impedit. Modi, veniam.</p>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        first: 'smooth',
      }
    }
  }
</script>
<style lang="scss" scoped>
  .scrollport{
    padding-top: 120px;
  }

  .container{
    margin-top: 100px;
  }

  nav {
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
  }

  main.css-area {
    height: 631px;
    overflow-y: scroll;
    h1{
      padding-top: 25px;
    }
  }

  .grid-block {
    width: 40%;
    position: fixed;
    right: 2%;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li{
    padding: 5px;
    font-size: 1em;
  }
</style>
