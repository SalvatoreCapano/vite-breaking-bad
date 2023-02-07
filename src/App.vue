<script>

  import axios from 'axios';
  import { store } from './store.js';

  import searchForm from './components/AppSearchForm.vue'
  import resultsCount from './components/AppResultsCount.vue'
  import placeholdersContainer from './components/AppPlaceholdersContainer.vue'
  import cardsContainer from './components/AppCardsContainer.vue'
  import errorScreen from './components/AppError.vue'

  export default {
    name: "App",
    components: {
      searchForm,
      resultsCount,
      placeholdersContainer,
      cardsContainer,
      errorScreen
    },
    data () {
      return {
        store
      }
    },
    methods: {
      getArchetypes () {
        // Richiesta per gli archetypes
        axios.get(`https://db.ygoprodeck.com/api/v7/archetypes.php`)
          .then((response) => {
            this.store.archetypes = response.data;
            console.log("Archetypes", this.store.archetypes);
          })
          .catch((error) => {
            this.store.downloadCompleted = true;
            this.store.error = true;
            console.log("ERRORE: Impossibile ottenere la lista degli archeotipi.", error);
          })
      },
      getCards () {
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php${(this.store.archetypes != "") ? ('?archetype=' + this.store.selectedArchetype) : ('')}`)
          .then((response) => {
            this.store.results = response.data.data.slice(0,this.store.cardsNumber);
            this.store.downloadCompleted = true;
          })
          .catch((error) => {
            this.store.downloadCompleted = true;
            this.store.error = true;
            console.log("ERRORE: Impossibile ottenere i dati delle carte.", error);
          })
      }
    },
    created () {
      this.getArchetypes();
      this.getCards();
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

    <searchForm @search="getCards()"/>

    <resultsCount />

    <div v-if="!this.store.error">

      <placeholdersContainer v-if="!this.store.downloadCompleted" :cardsNumber="this.store.cardsNumber"/>
  
      <cardsContainer v-else/>

    </div>

    <errorScreen v-else />
        
  </main>

</template>

<style lang="scss">
@import "style/partials/reset.scss";

  header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 30;
    width: 100%;
    padding: 16px 0;

    background-color: #ffffff;
    box-shadow: 0px 6px 24px 1px #00000025;

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
    min-height: calc(100vh - 80px - 32px); // Altezza schermo - altezza logo - padding header

    padding: 2rem 0;
  }

</style>