<script setup>
import Section from "./UI/Section.vue";

const skills = [
  "react",
  "flask",
  "javascript/typescript",
  "html",
  "css",
  "tailwindcss",
  "python",
  "astro",
  "go",
];
</script>
<template>
  <Section title="Skills">
    <ul class="flex flex-wrap justify-center gap-2 md:justify-start">
      <li v-for="(skill, index) in skills" :key="index">
        <span
          class="text-md jetbrains-mono py-.5 rounded-md bg-neutral-600 px-5 text-neutral-50 transition-opacity hover:opacity-85"
          >{{ skill }}</span
        >
      </li>
    </ul>
  </Section>
</template>
