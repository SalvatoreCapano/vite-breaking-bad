<script>

  import { store } from '../store.js';
  import card from '../components/AppCard.vue'

  export default {
      name: 'cardsContainer',
      components: {
        card
      },
      props: {
        cardsNumber: Number
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

      <card v-for="num in cardsNumber" :isPlaceholder="true"/>

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