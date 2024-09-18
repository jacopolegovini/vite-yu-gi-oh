<script>
import SingleCard from './SingleCard.vue';
import axios from 'axios';

export default {
  data() {
    return {
        cards: [],
        apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0'
    }
  },
  methods: {
    createCards(){
        axios.get(this.apiUrl)
            .then((response) => {
                console.log(response.data.data[0].name)
                for (let i = 0; i < 20; i++) {
                    this.cards.push(response.data.data[i])
                }
                console.log(this.cards)
            });
    } 
  },
  mounted() {
        this.createCards();
  },
  components: {
    SingleCard
  }
}
</script>

<template>
    <main>
        <h2>Number of cards</h2>
        <div class="card-list">
            <SingleCard v-for="(card, index) in cards" :key="index"
                :card = "card"
            />
        </div>
    </main>
</template>

<style scoped>
    .card-list {
        display: flex;
    }
</style>