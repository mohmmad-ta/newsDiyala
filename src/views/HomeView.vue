<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import CardNews from "@/components/CardNews.vue";

const config = {
  autoplay: 4000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
};
const breakpoints = {
  1: {
    itemsToShow: 2.4,
  },
  700: {
    itemsToShow: 3,
  },
  1000: {
    itemsToShow: 3.5,
  },
  1500: {
    itemsToShow: 5.3,
  },
}
</script>

<template>
  <main class="py-20 container">
    <Carousel class="overflow-hidden rounded-md" :transition="700" v-bind="config">
      <Slide v-for="slide in 10" :key="slide">
        <div class="relative ci">
          <img class="absolute top-0 left-0 z-0 ci" src="/a1.jpeg" alt="">
          <div class="w-full absolute flex flex-wrap p-6 items-end bottom-0 left-0 min-h-[50%] z-10 bg-gradient-to-b from-primary-10 to-primary-950">
            <div class="text-right w-full p-3">
              <h2 class="w-full text-white font-bold text-lg md:text-xl mb-2">mohmmad</h2>
              <p class="w-full text-zinc-300 text-md md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur deleniti doloremque ea eius est Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem dolores earum esse et fugit ipsam iure laboriosam laudantium natus nihil non, officiis quod repellendus sed sequi tempore. Assumenda, commodi.</p>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>

<!--  news list  -->
    <div  class="mt-10">
      <Carousel dir="rtl" :breakpoints="breakpoints" :wrapAround="false" :transition="500">
        <Slide v-for="slide in 10" :key="slide">
          <button type="button" class="w-full mx-1 bg-secondary-100 hover:text-primary-950 text-secondary-950 duration-150 overflow-hidden px-3 py-0.5 rounded">{{slide}}</button>
        </Slide>
      </Carousel>
    </div>
    <div class="flex gap-4 mt-10 justify-center flex-wrap w-full">
      <div v-for="i in 10" :key="i">
        <CardNews />
      </div>
    </div>
  </main>
</template>

<style scoped>
.ci{
  width: 100% !important;
  height: 500px !important;
}
@media (max-width: 768px) {
  .ci{
    height: 300px !important;
  }
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 1s;
}
</style>