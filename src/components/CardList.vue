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
    <main class="card-list-general">
        <h2>Number of cards</h2>
        <div class="card-list">
            <SingleCard v-for="(card, index) in cards" :key="index"
                :card = "card"
            />
        </div>
    </main>
</template>

<style scoped>
    h2 {
        background-color: black;
        color: white;
    }
    .card-list-general {
        background-color: white;
        padding: 30px;
    }
    .card-list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
</style>