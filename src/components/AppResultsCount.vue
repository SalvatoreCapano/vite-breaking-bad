<script>

  import { store } from '../store.js';

  export default {
      name: 'resultsCount',
      data () {
        return {
          store
        }
      }
  }
</script>

<template>
  
  <div class="container">

    <div>
      <p>Found <span>{{ store.results.length }}</span> cards !</p>
    </div>

  </div> <!-- /container-->

</template>

<style scoped>
.container div {
  padding: 10px 6px;
  margin-bottom: 1.5rem;

  color: white;

  border-radius: 10px;
  background-color: #101010;
}
</style>