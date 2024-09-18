<script>
import { store } from './store';

export default {
  data() {
    return {
      store
    }
  },
  props: {
    card: {
        card_images: {
            image_url: {
                type: String,
            required: true
            }
        }, 
        name: {
            type: String,
            required: true
        },
        race: {
            type: String,
            required: true
        }
    }
  }
}
</script>

<template>
    <div class="card">
        <img :src="card.card_images[0].image_url" :alt="card.name">
        <section>
            <h4>{{ card.name }}</h4>
            <p>{{ card.race }}</p>
        </section>
    </div>
</template>

<style scoped>
    section {
        background-color: #D48F3B;
        height: 100px;
    }

    p {
        padding: 0 5px;
        text-align: center;
    }

    h4 {
        color: white;
        text-transform: uppercase;
        padding: 10px 5px;
        text-align: center;
    }

    .card {
        flex-basis: calc((100% / 5) - (80px / 5) );
    }
</style>