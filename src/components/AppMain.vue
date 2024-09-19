<script>
import CardList from './CardList.vue';
import LoaderCardList from './LoaderCardList.vue';
import { store } from './store.js';

export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    myTimeout() {
        setTimeout(() => {
            store.changeVariable();
        }, 1000);
    }
  },
  mounted() {
    this.myTimeout()
  },
  components: {
    CardList,
    LoaderCardList
  }
}
</script>

<template>
    <main>
        <div class="container">
            <div v-show="store.loaded===true"><CardList/></div>
            <div v-show="store.loaded===false"><LoaderCardList/></div>
        </div>
    </main>
</template>

<style scoped>
    main {
        background-color: #D48F3B;
        padding: 20px 0;
    }
</style>