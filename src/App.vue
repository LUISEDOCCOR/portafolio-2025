<script setup>
import MainLayout from "./layouts/MainLayout.vue";
import Header from "./components/Header.vue";
import AboutMe from "./components/AboutMe.vue";
</script>

<template>
  <MainLayout>
    <Header />
    <main class="mt-16">
      <AboutMe />
    </main>
  </MainLayout>
</template>
