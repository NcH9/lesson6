<script setup>
import task1 from './components/task1.vue'
import router from './router/index';
</script>

<template>
  <main>
    <RouterView />
    <div class="bubble">
      <RouterLink to="/"><v-btn>1</v-btn></RouterLink>
      <RouterLink :to="{name: 'page2'}"><v-btn>2</v-btn></RouterLink>
    </div>
    
  </main>
</template>

<style scoped>
.bubble {
  background-color: rgb(59, 59, 59);
  box-shadow: 3px -3px 5px gray;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  place-items: center;
  margin: 15px;
  padding: 15px;
}
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
