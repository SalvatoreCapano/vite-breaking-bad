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
  <div class="container">
    <HelloWorld />
  </div>
</template>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>