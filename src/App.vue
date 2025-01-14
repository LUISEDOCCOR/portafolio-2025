<script setup>
import MainLayout from "./layouts/MainLayout.vue";
import Header from "./components/Header.vue";
import AboutMe from "./components/AboutMe.vue";
import Education from "./components/Education.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Certificates from "./components/Certificates.vue";
import Footer from "./components/Footer.vue";
import { Analytics } from "@vercel/analytics/vue";
</script>

<template>
  <Analytics />
  <MainLayout>
    <Header />
    <main class="my-16 space-y-10">
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
    </main>
    <Footer />
  </MainLayout>
</template>
