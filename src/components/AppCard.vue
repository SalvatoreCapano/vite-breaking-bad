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
        elem: Object,
        isPlaceholder: {
          type: Boolean,
          default: false
        }
      }
  }
</script>

<template>
      
      <div class="card" v-if="!isPlaceholder">

        <div class="imgContainer">
          <img :src="elem.card_images[0].image_url" alt="">
        </div>
        <h4 class="cardName">{{ elem.name }}</h4>
        <span class="race">{{ elem.race }}</span>

      </div> <!-- /card-->

      <div class="card placeholder" v-else>
      </div> <!-- /card placeholder-->

</template>

<style lang="scss" scoped>
  .card {
    width: 250px;
    height: 450px;
    padding: 10px;

    background-color: #ffffff;
    border: 2px solid #111111;

    overflow: hidden;

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

    &.placeholder {
      position: relative;

      &::after {
        content: '';

        position: absolute;
        bottom: -50px;

        width: 530px;
        height: 90px;

        transform: rotate(-60deg);
        transform-origin: left;

        background: linear-gradient(0deg, rgba(255,255,255,0) 20%, rgba(136,136,136,0.7512437810945274) 50%, rgba(255,255,255,0) 80%); 
      
        animation: placeholderAnimation 0.5s infinite linear;
      }
    }
  }

  @keyframes placeholderAnimation {
    from {
      left: -150px;
    }
    to {
      left: 100%
    }
  }
</style>