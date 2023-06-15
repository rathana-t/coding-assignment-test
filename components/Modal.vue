<template>
  <div v-for="item in getItemObject(country)" :key="item.key">
    <div class="flex">
      <span class="title">{{ item.key }} :</span>
      <div v-if="typeof item.value === 'object'">
        <list-object-text :item="item.value" />
      </div>
      <div v-else>
        {{ item.value }}
      </div>
    </div>
    <div class="border-b border-slate-400 w-full"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  country: {
    type: Object,
    required: true,
  },
});

const { getItemObject } = useCountry();
</script>

<style scoped>
.title {
  @apply text-slate-400;
}
</style>