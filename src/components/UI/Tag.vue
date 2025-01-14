<script setup>
defineProps({
  label: String,
  bg: String,
});
</script>
<template>
  <span
    :class="`jetbrains-mono py-.5 rounded-md ${bg || 'bg-neutral-600'} px-1 text-sm text-neutral-50 transition-opacity hover:opacity-85`"
    >{{ label }}</span
  >
</template>
