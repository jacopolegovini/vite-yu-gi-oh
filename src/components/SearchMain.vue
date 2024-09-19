<script>
export default {
  data() {
    return {
      
    }
  }
}

</script>

<template>
    <div class="search-input">
        <div>Selected: {{ searchedName }}</div>
        <select v-model="searchedName">
            <option disabled value="">Seleziona un archetipo</option>
            <option :value="searchedName">test</option>
            <option :value="searchedName">test2</option>
        </select>
    </div>
</template>

<style scoped>
    .search-input {
        margin-bottom: 10px;
    }
</style>