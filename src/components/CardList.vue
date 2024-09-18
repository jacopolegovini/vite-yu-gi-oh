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
                for (let i = 0; i < response.data.data.length; i++) {
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
        <h3>Number of cards: {{ cards.length }}</h3>
        <div class="card-list">
            <SingleCard v-for="(card, index) in cards" :key="index"
                :card = "card"
            />
        </div>
    </main>
</template>

<style scoped>
    h3 {
        background-color: black;
        color: white;
        padding: 10px ;
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