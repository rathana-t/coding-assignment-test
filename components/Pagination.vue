<template>
  <div
    class="flex justify-center items-center gap-1 fixed bottom-0 bg-slate-200 w-full p-4"
  >
    <button class="page-button" @click="gotoPage(1)" :disabled="page === 1">
      {{ "<<" }}
    </button>
    <button
      class="page-button"
      @click="gotoPage(page - 1)"
      :disabled="page === 1"
    >
      {{ "<" }}
    </button>
    <button
      v-for="item in getFivePage"
      :key="item"
      :class="page === item ? 'active-page-button' : 'page-button'"
      @click="gotoPage(item)"
    >
      {{ item }}
    </button>
    <button
      class="page-button"
      @click="gotoPage(page + 1)"
      :disabled="page === lastPage"
    >
      {{ ">" }}
    </button>
    <button
      class="page-button"
      @click="gotoPage(lastPage)"
      :disabled="page === lastPage"
    >
      {{ ">>" }}
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(["update:page"]);

const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
  lastPage: {
    type: Number,
    required: true,
  },
  gotoPage: {
    type: Function,
    required: true,
  },
});

const getFivePage = computed(() => {
  let start = props.page - 2 > 0 ? props.page - 2 : 1;
  let end = props.page + 2 <= props.lastPage ? props.page + 2 : props.lastPage;
  const result = [];

  if (end - start < 4) {
    if (start === 1) {
      end = Math.min(5, props.lastPage);
    } else {
      start = Math.max(1, props.lastPage - 4);
    }
  }

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
});
</script>

<style scoped>
.default-page-button {
  @apply border-2  border-gray-300 p-1 rounded-md w-10 disabled:opacity-50;
}
.page-button {
  @apply default-page-button bg-white;
}

.active-page-button {
  @apply default-page-button bg-gray-500 text-white;
}
</style>