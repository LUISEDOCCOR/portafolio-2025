<script setup>
import Section from "./UI/Section.vue";
import TikTokIcon from "./Icons/TikTokIcon.vue";
import CodeIcon from "./Icons/CodeIcon.vue";
import Tag from "./UI/Tag.vue";

const projects = [
  {
    title: "Edutask",
    content:
      "Gestiona tus tareas diarias de manera eficiente, establece recordatorios y realiza un seguimiento de tu progreso.",
    href: "https://app-production-3784.up.railway.app/task/",
    skills: ["tailwindcss", "python", "flask", "sqlite", "jinja"],
  },
  {
    title: "EasyLiker",
    content:
      "EasyLinker es una herramienta innovadora para la creación de páginas web simples y funcionales de manera rápida y eficiente. ",
    href: "/",
    skills: ["tailwindcss", "vite", "react", "express", "vercel-SDK", "prisma"],
    isWorking: true,
  },
  {
    title: "ColorKit",
    content:
      "Creador de paletas de colores para tailwindcss, en la que crea 11 colores, pero como usuario puedes escoger 2 colores y siempre te dará 11 colores que combinan entre ellos.",
    href: "https://www.colorkit.xyz/",
    skills: ["tailwindcss", "react", "typescript"],
  },
  {
    title: "DevSinFronteras",
    content:
      "En este proyecto, comparto mi conocimiento con la comunidad a través de videos en TikTok, Instagram y Facebook, con el objetivo de promover el aprendizaje y la difusión del desarrollo web.",
    href: "https://www.tiktok.com/@devsinfronteras",
    skills: ["comunicación", "redes-sociales", "creatividad"],
    icon: TikTokIcon,
  },
];
</script>
<template>
  <Section title="Proyectos">
    <ul class="grid grid-cols-1 gap-5 md:grid-cols-3">
      <li
        class="flex flex-col justify-between gap-2 rounded-md border border-neutral-600 p-5"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div class="space-y-2">
          <span class="flex items-center gap-1">
            <a
              :href="project.href"
              class="text-md font-semibold underline underline-offset-2"
              >{{ project.title }}</a
            >
            <component class="w-5 stroke-2" :is="project.icon || CodeIcon" />
          </span>
          <p class="jetbrains-mono text-sm">
            {{ project.content }}
          </p>
        </div>
        <ul class="flex flex-wrap justify-start gap-1">
          <Tag
            v-show="project.isWorking"
            bg="bg-green-600"
            label="construcción..."
          />
          <li v-for="(skill, index) in project.skills" :key="index">
            <Tag :label="skill" />
          </li>
        </ul>
      </li>
    </ul>
  </Section>
</template>
