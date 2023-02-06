<script>

  import HelloWorld from './components/HelloWorld.vue'

  export default {
  name: "App",
  components: {
      HelloWorld
  }
};
</script>


<template>
  
  <header>

    <div class="container">

      <div class="logo">
        <img src="./assets/logo.webp" alt="Yu-Gi-Oh">
      </div> <!-- /logo-->

      <h1 class="mainTitle">Yu-Gi-Oh API</h1>

    </div> <!-- /container-->

  </header>


  <main>

    <searchForm />

    <resultsCount />
    
    <div class="cardsContainer">
    </div> <!-- /cardsContainer-->

  </main>

</template>

<style lang="scss">
@import "style/partials/reset.scss";

  header {
    background-color: #ffffff;
    box-shadow: 0px 6px 24px 1px #00000025;

    padding: 16px 0;

    .container {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
  }

  .logo {
    height: 80px;

    img {
      height: 100%;
    }
  }

</style>