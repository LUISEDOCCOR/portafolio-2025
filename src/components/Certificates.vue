<script setup>
import Section from "./UI/Section.vue";

const certificates = [
  {
    title: "Crea páginas web con HTML y CSS",
    content: "Curso sobre cómo crear y maquetar páginas usando HTML y CSS",
    href: "https://www.mastermind.ac/certificates/67103e6b5b66470480a38a5f773caed1",
  },
  {
    title: "¡Linux: de Noob a Pro en 9 horas!",
    content: "Sistemas operativos basados en Debian Linux.",
    href: "https://www.mastermind.ac/certificates/33290ab05fc14ed99e72c73613469b96",
  },
  {
    title: "Todo sobre la web con PHP",
    content: "Curso sobre cómo crear páginas usando PHP y MySQL",
    href: "https://www.mastermind.ac/certificates/5448a06270fa4afdb8da70dabe1f2ce8",
  },
  {
    title: "Master en Python: Aprender Python 3, Django, Flask y Tkinter",
    content: "Curso sobre backend con django",
    href: "https://udemy-certificate.s3.amazonaws.com/image/UC-d39174ac-83e2-4138-925a-16d4458b585b.jpg?v=1703626184000",
  },
  {
    title: "Frontend con HTML, CSS y JS",
    content: "Curso sobre cómo crear páginas usando HTML, CSS y JS",
    href: "https://www.mastermind.ac/certificates/551bc00405864777873a31006c8b55b5",
  },
  {
    title: "Crea páginas web con HTML y CSS",
    content: "Curso sobre cómo crear y maquetar páginas usando HTML y CSS",
    href: "https://www.mastermind.ac/certificates/67103e6b5b66470480a38a5f773caed1",
  },
  {
    title: "Curso de Accesibilidad Web",
    content: "Código Facilito",
    href: "https://codigofacilito.com/certificates/1bd5435d-7b0c-4fc2-a6b1-4f9100238505",
  },
  {
    title: "Curso de fundamentos de UX para programadores",
    content: "Código Facilito",
    href: "https://codigofacilito.com/certificates/ec4d3e4a-db6f-430d-b9c0-b67504b603de",
  },
];
</script>
<template>
  <Section title="Certificaciones">
    <ul class="grid grid-cols-1 gap-5 md:grid-cols-3">
      <li
        class="flex flex-col justify-between gap-2 rounded-md border border-neutral-600 p-2 md:p-3"
        v-for="(certificate, index) in certificates"
        :key="index"
      >
        <a
          :href="certificate.href"
          class="text-md font-semibold underline underline-offset-2"
        >
          {{ certificate.title }}
        </a>
        <p class="jetbrains-mono text-sm text-neutral-600">
          {{ certificate.content }}
        </p>
      </li>
    </ul>
  </Section>
</template>
