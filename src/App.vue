<script setup>
import MainLayout from "./layouts/MainLayout.vue";
import Header from "./components/Header.vue";
import AboutMe from "./components/AboutMe.vue";
import Education from "./components/Education.vue";
</script>

<template>
  <MainLayout>
    <Header />
    <main class="mt-16 space-y-10">
      <AboutMe />
      <Education />
    </main>
  </MainLayout>
</template>
