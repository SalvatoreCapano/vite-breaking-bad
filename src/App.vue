<script>

  import axios from 'axios';
  import { store } from './store.js';

  import searchForm from './components/AppSearchForm.vue'
  import resultsCount from './components/AppResultsCount.vue'
  import placeholdersContainer from './components/AppPlaceholdersContainer.vue'
  import cardsContainer from './components/AppCardsContainer.vue'

  export default {
    name: "App",
    components: {
      searchForm,
      resultsCount,
      placeholdersContainer,
      cardsContainer,
    },
    data () {
      return {
        store,
        cardsNumber: 20,
        downloadCompleted: false
      }
    },
    created () {
      axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`)
        .then((response) => {
          this.store.results = response.data.data.slice(0,this.cardsNumber);
          console.log(this.store.results);
          console.log("Store", store);
          this.downloadCompleted = true;
        });
    }
};
</script>


<template>
  
  <header>

    <div class="container">

      <a href="#">
        <div class="logo">
        <img src="./assets/logo.webp" alt="Yu-Gi-Oh">
        </div> <!-- /logo-->
      </a>

      <h1 class="mainTitle">Yu-Gi-Oh API</h1>

    </div> <!-- /container-->

  </header>


  <main>

    <searchForm />

    <resultsCount />

    <placeholdersContainer v-if="!downloadCompleted" :cardsNumber="cardsNumber"/>

    <cardsContainer v-else/>
        
  </main>

</template>

<style lang="scss">
@import "style/partials/reset.scss";

  header {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;

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

  main {
    background-color: #dcdcdc;

    padding: 1rem 0;
  }

</style>