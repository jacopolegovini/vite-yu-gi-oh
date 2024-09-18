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
    .card {
        flex-basis: calc((100% / 5) - (80px / 5) );
    }
</style>