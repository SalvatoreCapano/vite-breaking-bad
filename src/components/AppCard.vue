<script>

  import { store } from '../store.js';


  export default {
      name: 'card',
      data () {
        return {
          store
        }
      },
      props: {
        elem: Object
      }
  }
</script>

<template>
      
      <div class="card">

        <div class="imgContainer">
          <img :src="elem.card_images[0].image_url" alt="">
        </div>
        <h4 class="cardName">{{ elem.name }}</h4>
        <span class="race">{{ elem.race }}</span>

      </div> <!-- /card-->

</template>

<style lang="scss" scoped>
  .card {
    width: 250px;
    padding: 10px;

    background-color: #ffffff;
    border: 2px solid #111111;

    .imgContainer {
      width: 100%;
      margin-bottom: 10px;

      img {
        width: 100%;
      }
    }

    .cardName {
      font-size: 0.9rem;
    }

    .race {
      font-size: 0.85rem;
    }
  }
</style>