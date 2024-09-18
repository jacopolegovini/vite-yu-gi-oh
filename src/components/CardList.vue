<script>
import SingleCard from './SingleCard.vue';

export default {
  data() {
    return {
        cards: [],
        apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0'
    }
  },
  methods: {
    addApi(){
        axios.get(this.apiUrl)
            .then((response) => {
                console.log(response.data.data[0].id)
                return this.cards
            });
    } 
  },
  mounted() {
        this.addApi();
  },
  components: {
    SingleCard
  }
}
</script>

<template>
    <main>
        <h2>Number of cards</h2>
        <SingleCard v-for="card in cards"/>
    </main>
</template>

<style scoped>
</style>