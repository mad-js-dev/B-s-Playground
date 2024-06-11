<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'

</script>

<template>
  <div style="display: flex;width: 100%;">
    <header style="flex-basis: 35%;">

      <div class="wrapper">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        <HelloWorld msg="You did it!!!" />

      </div>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
        <nav>
          <p>Colors:</p>
          <RouterLink to="/styleguide/colors/palettes">Palettes</RouterLink>
          <RouterLink to="/styleguide/colors/tokens">Tokens</RouterLink>
        </nav>
        <nav>
          <p>Atoms:</p>
          <RouterLink to="/styleguide/components/badgeInteractable">Badge Interactable</RouterLink>
          <RouterLink to="/styleguide/components/basicInteractable">Basic Interactable</RouterLink>
        </nav>
        <nav>
          <p>Molecules:</p>
          <RouterLink to="/styleguide/components/singleInteractable">Single Interactable</RouterLink>
          <RouterLink to="/styleguide/components/tabsInteractable">Tabs Interactable</RouterLink>
        </nav>
        <nav>
          <p>Organisms:</p>
          <RouterLink to="/styleguide/components/toggableInteractable">Toggable Interactable</RouterLink>
        </nav>
      </div>
    </header>
    <div style="flex-basis: 65%;">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./components/helloWorld.scss";


header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
