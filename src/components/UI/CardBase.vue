<script setup>
defineProps({
  href: String,
  title: String,
  content: String,
});
</script>
<template>
  <li
    class="flex flex-col justify-between gap-2 rounded-md border border-neutral-600 p-2 md:p-3"
  >
    <div class="gap-2">
      <a
        :href="href"
        class="text-md font-semibold underline underline-offset-2"
      >
        {{ title }}
      </a>
      <p class="jetbrains-mono text-sm text-neutral-600">
        {{ content }}
      </p>
    </div>
    <slot />
  </li>
</template>
