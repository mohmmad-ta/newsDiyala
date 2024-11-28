<script setup>
import {ref} from "vue";

import { useAdminStore } from '@/stores/admin.js'

const store = useAdminStore();
</script>

<template>
  <header :class="store.slidOpen === true ? 'pr-80' : 'pr-0'" class="z-40 fixed top-0 left-0 w-full h-16 bg-white shadow-md duration-200 shadow-secondary-50 overflow-hidden">
    <div class="flex items-center justify-between h-16 px-6">
      <nav class="flex items-center gap-3 text-primary-950">
        <button class="hover:text-primary-500 duration-150 text-md">
          <i class="fa-regular fa-bell"></i>
        </button>
        <button class="hover:text-primary-500 duration-150 text-md">
          <i class="fa-solid fa-language"></i>
        </button>
        <button class="hover:text-primary-500 duration-150 text-md">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </nav>
      <div>
        <button v-if="store.slidOpen === true" @click="store.slidOpen === true ? store.slidOpen = false : store.slidOpen = true" type="button" class="text-xl text-secondary-950 transition-opacity duration-150">
          <i class="fa-solid fa-bars-staggered"></i>
        </button>
        <button v-else-if="store.slidOpen === false" @click="store.slidOpen === true ? store.slidOpen = false : store.slidOpen = true" type="button" class="text-xl text-secondary-950 transition-opacity duration-150">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  </header>
</template>