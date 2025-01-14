<script setup>
import Section from "./UI/Section.vue";

const education = [
  {
    title: "Bachillerato",
    contetnt: "Universidad de Guadalajara",
    date: "2023 - 2026",
  },
  {
    title: "TAE de progrmación web",
    contetnt: `Especialización brindada por el bachillerato,en la cual se
    ven temas relacionados con la programación web,
    programación funcional y programación orientada a
    objetos. Todo esto en un plazo de 2 años`,
    date: "2024 - 2026",
  },
];
</script>
<template>
  <Section title="Educación">
    <ul class="space-y-2">
      <li
        class="flex flex-col-reverse text-neutral-600 md:flex-row"
        v-for="(item, index) in education"
        :key="index"
      >
        <div class="text-md w-full space-y-1 md:w-4/5">
          <h3 class="font-bold text-black">{{ item.title }}</h3>
          <p class="jetbrains-mono">{{ item.contetnt }}</p>
        </div>
        <div class="w-full text-right md:w-1/5">
          <span>{{ item.date }}</span>
        </div>
      </li>
    </ul>
  </Section>
</template>
