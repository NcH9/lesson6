<script setup>
import task1 from './components/task1.vue'
import router from './router/index';
</script>

<template>
  <main>
    <RouterView />

    <RouterLink to="/"><v-btn>1</v-btn></RouterLink>
    <RouterLink :to="{name: 'page2'}"><v-btn>2</v-btn></RouterLink>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
