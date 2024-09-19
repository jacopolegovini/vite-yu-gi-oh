<script>
import SearchMain from './SearchMain.vue';
import SingleCard from './SingleCard.vue';
import axios from 'axios';

export default {
  data() {
    return {
        cards: [],
        archetypes: [],
        apiUrl: `https://db.ygoprodeck.com/api/v7/cardinfo.php`,
        apiCall: '',
        apiUrlArchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php'
    }
  },
  methods: {
    modifyUrl(apiUrl){
        console.log(apiUrl)
        console.log('test')
    },
    createCards(searchedName = ''){
        if (searchedName !== '') {this.apiCall = this.apiUrl + `?archetype=${searchedName}`} 
        else {
            this.apiCall = this.apiUrl + '?num=20&offset=30'
        }
        axios.get(this.apiCall, {
        })
            .then((response) => {
                console.dir(response)
                this.cards = response.data.data;
                console.log(this.cards)
            });
    },
    getArchetype() {
        axios.get(this.apiUrlArchetype)
            .then((response) => {
                this.archetypes = response.data
                console.log(this.archetypes)
            })
    },
    findName(searchedName) {
        console.log('test ok')
        console.log(searchedName);
        this.createCards(searchedName)
    }
  },
  mounted() {
        this.getArchetype();
        this.createCards();
  },
  components: {
    SingleCard,
    SearchMain
  }
}
</script>

<template>
    <main class="card-list-general">
        
        <SearchMain
            :cards = "cards" 
            @search-name="findName"
        />
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