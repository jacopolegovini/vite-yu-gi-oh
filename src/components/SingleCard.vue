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
        }
    }
  }
}
</script>

<template>
    <div class="card">
        <img :src="card.card_images[0].image_url" alt="...">
    </div>
</template>

<style scoped>
    img {
        height: 250px;
    }

    .card {
        flex-basis: 20%;

    }
</style>