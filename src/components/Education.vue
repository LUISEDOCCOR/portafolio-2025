<script setup>
const education = [
  {
    title: "Bachillerato",
    contetnt: "Universidad de Guadalajara",
    date: "2023 - 2026",
  },
  {
    title: "TAE de progrmación web",
    contetnt: `Especialización brindada por el bachillerato
    núm.9 de la Universidad de Guadalajara, en la cual se
    ven temas relacionados con la programación web,
    programación funcional y programación orientada a
    objetos. Todo esto en un plazo de 2 años`,
    date: "2024 - 2026",
  },
];
</script>
<template>
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">Educación</h2>
    <ul class="space-y-2">
      <li
        class="grid grid-cols-3 text-neutral-600"
        v-for="(item, index) in education"
        :key="index"
      >
        <div class="text-md col-span-2 space-y-1">
          <h3 class="font-bold text-black">{{ item.title }}</h3>
          <p class="jetbrains-mono">{{ item.contetnt }}</p>
        </div>
        <div class="text-right">
          <span>{{ item.date }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>
