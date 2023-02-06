<script>

  import { store } from '../store.js';

  import card from '../components/AppCard.vue'

  export default {
      name: 'cardsContainer',
      components: {
        card
      },
      data () {
        return {
          store
        }
      }
  }
</script>

<template>
  
  <div class="container">

    <div class="cardsContainer">

      <card v-for="(elem, index) in store.results" :elem="elem"/>

    </div> <!-- /cardsContainer-->

  </div> <!-- /container-->

</template>

<style lang="scss" scoped>
  .cardsContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.5rem;
  }
</style>