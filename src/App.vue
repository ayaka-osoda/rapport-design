<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import RapportHeader from './components/RapportHeader.vue'
</script>

<template>
  <header>
    <RapportHeader />
    <div class="nav-wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/history">History</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.nav-wrapper {
  padding: 1vw;
  width: 100%;
}

nav {
  font-size: 12px;
  text-align: center;
}

a {
  color: #999;
  font-weight: 600;
}

a.router-link-exact-active {
  color: #f9a743;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header .nav-wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1rem;
  }
}
</style>
