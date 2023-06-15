<template>
  <div class="">
    {{ country }}
  </div>
</template>

<script setup>
defineProps({
  country: {
    type: Object,
    required: true,
  },
});
</script>