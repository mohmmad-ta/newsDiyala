<script setup>
import { useDataStore } from '@/stores/StoreData.js'
const store = useDataStore()
</script>

<template>
  <header class="z-50 fixed top-0 left-0 w-full h-16 bg-white shadow-md shadow-secondary-50 overflow-hidden">
    <div class="container">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-3 text-primary-950">
          <button class="hover:text-primary-500 duration-150">
            <i class="fa-regular fa-bell text-lg"></i>
          </button>
          <button class="hover:text-primary-500 duration-150">
            <i class="fa-solid fa-magnifying-glass text-md"></i>
          </button>
        </div>
        <div class="flex items-center gap-6">
          <nav class="flex items-center gap-3 text-secondary-950">
            <RouterLink to="/problem" class="hover:text-primary-950 duration-150">
              problem
            </RouterLink>
            <RouterLink to="/news" class="hover:text-primary-950 duration-150">
              news
            </RouterLink>
            <RouterLink to="/" class="hover:text-primary-950 duration-150">
              home
            </RouterLink>
          </nav>
          <h1 class="font-bold text-xl text-main-50">DIYALA</h1>
        </div>
      </div>
    </div>
  </header>
</template>