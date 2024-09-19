<script>
// import { ref } from 'vue'

export default {
  data() {
    return {
      searchedName: ''
    }
  },
  methods: {
    searchName() {
        console.log(this.searchedName)
        this.$emit('findName')
    }
  },

  props: {
    cards: {
        type: Array,
        required: true
    }
  }
}

const searchedName = ''
</script>

<template>
    <div class="search-input">
        <select v-model="searchedName" @change="searchName">
            <option disabled value="">Seleziona un archetipo</option>
            <option v-for="(card, index) in cards" :key="index">
                <div>{{ card.archetype }}</div>
            </option>
            <option>test2</option>
        </select>
    </div>
    <div>
        <!-- <h3>{{ cards[0].archetype }}</h3> -->
    </div>
</template>

<style scoped>
    .search-input {
        margin-bottom: 10px;
    }
</style>