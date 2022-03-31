<script setup>
  import Header from './components/Header.vue'
  import Menu from './components/Menu.vue'
  import Illustration from './components/Illustration.vue'
  import Sinopsis from './components/Sinopsis.vue'
  import Search from './components/Search.vue'
  import Characters from './components/Characters.vue'
  import Islands from './components/Islands.vue'
  import MistObjects from './components/MistObjects.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <header>

  </header>

  <main>
    <body>
      <div class="page_container">
        <Header />
        <Menu />
        <Illustration />
        <Sinopsis />
        <Search />
        <Characters />
        <Islands />
        <MistObjects />
        <Footer />
      </div>
    </body>
  </main>
</template>

<style>
@import './assets/style.css';
</style>
