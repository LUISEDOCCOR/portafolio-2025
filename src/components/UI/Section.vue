<script setup>
defineProps({
  title: String,
});
</script>
<template>
  <section class="space-y-3">
    <h2 class="text-xl font-semibold">{{ title }}</h2>
    <slot />
  </section>
</template>
