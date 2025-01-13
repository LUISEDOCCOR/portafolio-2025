<script setup>
import LocationIcon from "./Icons/LocationIcon.vue";
import TikTokIcon from "./Icons/TikTokIcon.vue";
import MailIcon from "./Icons/MailIcon.vue";
import GitHubIcon from "./Icons/GitHubIcon.vue";
import LinkedinIcon from "./Icons/LinkedinIcon.vue";

const links = [
  {
    href: "https://github.com/LUISEDOCCOR",
    icon: GitHubIcon,
  },
  {
    href: "https://mx.linkedin.com/in/luiseduardoocegueda",
    icon: LinkedinIcon,
  },
  {
    href: "mailto:luiseduardoocegueda@gmail.com",
    icon: MailIcon,
  },
  {
    href: "https://www.tiktok.com/@devsinfronteras",
    icon: TikTokIcon,
  },
];
</script>

<template>
  <header class="grid grid-cols-3">
    <section class="col-span-2 space-y-3 text-neutral-600">
      <h1 class="text-2xl font-bold text-black">Luis Eduardo</h1>
      <p class="jetbrains-mono text-md">
        +2 años de experiencia. Desarrollador Front-end y Back-End. Programador
        autodidacta.
      </p>
      <div class="jetbrains-mono flex items-center gap-1 text-sm">
        <LocationIcon class="w-4 stroke-2" />
        <h2>Jalisco, México</h2>
      </div>
      <ul class="flex items-center gap-3">
        <li
          v-for="(link, index) in links"
          class="rounded-md border border-neutral-600 p-1 transition-colors hover:bg-neutral-300"
        >
          <a :href="link.href" :key="index">
            <component
              :is="link.icon"
              class="w-5 stroke-neutral-700 stroke-0"
            />
          </a>
        </li>
      </ul>
    </section>
    <section class="flex items-center justify-end">
      <img
        class="w-40 rounded-md"
        src="https://avatars.githubusercontent.com/u/110699874?v=4"
        alt="Luis Eduardo Cortes"
      />
    </section>
  </header>
</template>
