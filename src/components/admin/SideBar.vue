<script setup>
import { useAdminStore } from '@/stores/admin.js'
import {ref} from "vue";

const store = useAdminStore();
const showList1 = ref()
const showList2 = ref()
const showList3 = ref()
</script>

<template>
  <main :class="store.slidOpen === true ? 'right-0' : 'right-[-20rem]'" class="duration-200 z-50 fixed justify-center w-80 right-0 top-0 h-full bg-white py-2">
    <div class="w-full flex justify-center overflow-y-auto scrollbar-hide">
      <img class="w-32 h-fit" src="../../assets/logo.png" alt="">
    </div>
    <div class="text-primary-950 h-fit grid gap-3 p-10 text-right duration-100">
      <h1 class="text-secondary-500 text-sm">Dashboards</h1>
      <button @click="store.dashStep = 0" :class="store.dashStep === 0 ? 'text-main-50' : 'text-primary-950'" class="text-right hover:text-secondary-950 duration-150" type="button">Home <i class="mx-0.5 fa-solid fa-house"></i></button>
      <button class="text-right text-sm hover:text-secondary-950 duration-150" @click="showList1 = !showList1">Product <i :class="showList1 ? 'rotate-180 text-main-50' : 'rotate-0'" class="duration-100 fa-solid fa-chevron-down"></i></button>
      <Transition>
        <ul v-if="showList1">
          <li @click="store.dashStep = 1" :class="store.dashStep === 1 ? 'text-main-50' : 'text-primary-950'" class="cursor-pointer mb-1 px-4">المنتجات</li>
          <li @click="store.dashStep = 2" :class="store.dashStep === 2 ? 'text-main-50' : 'text-primary-950'" class="cursor-pointer mb-1 px-4">المنشورات</li>
        </ul>
      </Transition>
      <button @click="store.dashStep = 4" :class="store.dashStep === 4 ? 'text-main-50' : 'text-primary-950'" class="text-right hover:text-secondary-950 duration-150" type="button">Order </button>
      <button class="text-right text-sm hover:text-secondary-950 duration-150" @click="showList2 = !showList2">الحسابات <i :class="showList2 ? 'rotate-180 text-main-50' : 'rotate-0'" class="duration-100 fa-solid fa-chevron-down"></i></button>
      <Transition>
        <ul v-if="showList2">
          <li @click="store.dashStep = 3" :class="store.dashStep === 3 ? 'text-main-50' : 'text-primary-950'" class="cursor-pointer mb-1 px-4">الادمن الجانبي</li>
          <li @click="store.dashStep = 5" :class="store.dashStep === 5 ? 'text-main-50' : 'text-primary-950'" class="cursor-pointer mb-1 px-4">المستخدمين</li>
        </ul>
      </Transition>
      <button class="text-right text-sm hover:text-secondary-950 duration-150" @click="showList3 = !showList3">المتغيرات <i :class="showList3 ? 'rotate-180 text-main-50' : 'rotate-0'" class="duration-100 fa-solid fa-chevron-down"></i></button>
      <Transition>
        <ul v-if="showList3">
          <li @click="store.dashStep = 6" :class="store.dashStep === 6 ? 'text-main-50' : 'text-primary-950'" class="cursor-pointer mb-1 px-4">تاكز</li>
          <li @click="store.dashStep = 7" :class="store.dashStep === 7 ? 'text-main-50' : 'text-primary-950'" class="cursor-pointer mb-1 px-4">الكاتكريز</li>
          <li @click="store.dashStep = 9" :class="store.dashStep === 9 ? 'text-main-50' : 'text-primary-950'" class="cursor-pointer mb-1 px-4">color</li>
          <li @click="store.dashStep = 10" :class="store.dashStep === 10 ? 'text-main-50' : 'text-primary-950'" class="cursor-pointer mb-1 px-4">size</li>
        </ul>
      </Transition>

    </div>
  </main>
</template>