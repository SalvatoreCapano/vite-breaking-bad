<script>

  import { store } from '../store.js';

  export default {
    name: 'searchForm',
    data() {
      return {
        store
      }
    }
  }
  
</script>

<template>
  <div class="container">

    <select id="archetypeInput" v-model="store.selectedArchetype" @change="$emit('search'), this.store.downloadCompleted = false">
      <option value="" selected>-- Select an archetype --</option>
      <option v-for="archetype in this.store.archetypes" :value="archetype.archetype_name.toLowerCase()">{{ archetype.archetype_name }}</option>
    </select>

  </div> <!-- /container-->
</template>

<style lang="scss" scoped>

.container {
  margin: 1.5rem auto;
}

select {
  padding: 8px 12px;

  border: 2px solid #cfb25c;
  border-radius: 8px;

  &:focus {
    option:first-child {
      display: none;
    }
  } 
}

</style>