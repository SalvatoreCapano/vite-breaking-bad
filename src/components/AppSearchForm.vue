<script>

  export default {
      name: 'searchForm',
      data() {
        return {
          races: ["Aqua", "Beast", "Beast-Warrior", "Creator-God", "Cyberse", "Dinosaur", "Divine-Beast", "Dragon",
                  "Fairy", "Fiend", "Fish", "Insect", "Machine", "Plant", "Psychic", "Pyro", "Reptile", "Rock",
                  "Sea Serpent", "Spellcaster", "Thunder", "Warrior", "Winged Beast", "Wyrm", "Zombie", ]
        }
      }
  }
</script>

<template>
  <div class="container">

    <select name="race" id="race">
      <option value="" selected>-- Select a race --</option>
      <option v-for="race in races" :value="race">{{ race }}</option>
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