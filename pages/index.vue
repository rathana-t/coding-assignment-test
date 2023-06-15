<template>
  <div v-if="!!modalCountry">
    <div
      class="fixed top-0 left-0 z-10 bg-gray-500 opacity-70 w-full h-screen"
    ></div>
    <div
      class="fixed top-0 left-0 z-20 m-20 bg-slate-50 rounded-md p-10 w-[80%] h-[80%] flex flex-col items-end"
    >
      <modal :country="modalCountry" class="max-h-[90%] overflow-y-auto" />
      <button
        class="bottom-0 right-0 p-2 rounded-md bg-slate-500 text-white"
        @click="modalCountry = null"
      >
        Close
      </button>
    </div>
  </div>
  <div class="fixed top-0 left-0 right-0 bg-slate-200 h-20">
    <div class="flex justify-between items-center h-full p-5">
      <div class="flex justify-center">
        <input
          v-model="search"
          type="text"
          class="border-2 border-gray-300 p-2 rounded-md w-72"
          placeholder="Search"
          @input="searchCountry"
        />
      </div>
      <div class="text-4xl">
        <span class="text-slate-400"> Total: </span>
        <span class="font-bold">
          {{ totalData }}
        </span>
      </div>
      <div>
        Sort country name by:
        <div class="flex justify-end">
          <div class="flex justify-center items-center">
            <button
              class="border-2 border-gray-300 p-1 rounded-md w-20"
              :class="{ 'bg-blue-500 text-white': sortBy === 'asc' }"
              @click="sortData('asc')"
            >
              ASC
            </button>
            <button
              class="border-2 border-gray-300 p-1 rounded-md w-20"
              :class="{ 'bg-blue-500 text-white': sortBy === 'desc' }"
              @click="sortData('desc')"
            >
              DESC
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-36 mb-16 p-4">
    <div
      class="flex justify-center items-center px-5 fixed left-0 top-20 w-full bg-slate-500 text-white"
    >
      <div class="w-[7rem] h-[4rem]" />
      <div class="grid grid-cols-6 pl-6 gap-5 w-full">
        <div class="flex">
          <h1 class="text-md font-semibold">Country</h1>
        </div>
        <div>Code</div>
        <div>Calling code</div>
        <div>Native Name</div>
        <p class="col-span-2">Alternative</p>
      </div>
    </div>
    <div class="space-y-2">
      <country-item
        v-for="country in dataByPage"
        :key="country.name.official"
        :country="country"
        class="flex items-start p-2 bg-white border-2 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out"
        @open-modal="openModal"
      />
    </div>
  </div>
  <pagination :page="page" :last-page="lastPage" :goto-page="gotoPage" />
</template>

<script setup>
const baseUrl = "https://restcountries.com/v3.1";

const data = ref([]);
const dataByPage = ref([]);

const page = ref(1);
const lastPage = ref(1);
const limit = ref(25);
const sortBy = ref("");
const search = ref("");

const totalData = computed(() => data.value.length);

const modalCountry = ref(null);

async function fetch(url) {
  try {
    return await $fetch(`${baseUrl}${url}`);
  } catch (error) {
    console.log(error);
  }
}

onBeforeMount(async () => {
  data.value = await fetch("/all");
  setValue();
});

function openModal(country) {
  console.log(country);
  modalCountry.value = country;
}

function gotoPage(pageNumber) {
  if (pageNumber < 1 || pageNumber > lastPage.value) {
    return;
  }

  page.value = pageNumber;
  const start = (page.value - 1) * limit.value;
  const end = start + limit.value;
  dataByPage.value = data.value.slice(start, end);
}

function sortData(sort) {
  if (sort === "asc") {
    data.value.sort((a, b) => a.name.official.localeCompare(b.name.official));
  } else {
    data.value.sort((a, b) => b.name.official.localeCompare(a.name.official));
  }

  sortBy.value = sort;
  gotoPage(1);
}

async function searchCountry() {
  const searchValue = search.value.toLowerCase().trim();

  if (searchValue) {
    data.value = await fetch(`/name/${searchValue}`);
  } else {
    data.value = await fetch("/all");
  }

  setValue();
}

function setValue() {
  page.value = 1;
  dataByPage.value = data.value.slice(0, limit.value);
  lastPage.value = Math.ceil(data.value.length / limit.value);
}
</script>
