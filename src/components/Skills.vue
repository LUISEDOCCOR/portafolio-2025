<script setup>
import Section from "./UI/Section.vue";
import Tag from "./UI/Tag.vue";
const skills = [
  "React",
  "Flask",
  "JavaScript/TypeScript",
  "html",
  "css",
  "tailwindcss",
  "Python",
  "Astro",
  "Go",
];
</script>
<template>
  <Section title="Skills">
    <ul class="flex flex-wrap justify-start gap-1 md:gap-2">
      <li v-for="(skill, index) in skills" :key="index">
        <Tag :label="skill" />
      </li>
    </ul>
  </Section>
</template>
