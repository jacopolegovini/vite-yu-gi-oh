<script>
import SingleCard from './SingleCard.vue';

export default {
  data() {
    return {
      apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0'
    }
  },
  components: {
    SingleCard
  }
}
</script>

<template>
    <main>
        <h2>Number of cards</h2>
        <SingleCard/>
    </main>
</template>

<style scoped>
</style>