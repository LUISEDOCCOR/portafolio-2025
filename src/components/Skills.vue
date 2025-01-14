<script setup>
import Section from "./UI/Section.vue";
import Tag from "./UI/Tag.vue";
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
        <Tag :label="skill" />
      </li>
    </ul>
  </Section>
</template>
